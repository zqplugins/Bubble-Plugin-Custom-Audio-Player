function(instance, properties, context) {

	var audioLink = instance.data.audioLink
	var audioElement = instance.data.audioElement
	var isMouseDown = false;
	var sliderStyle = instance.data.sliderStyle;
	var slider = instance.data.slider

	if (properties.audio_file) {
		audioLink = properties.audio_file
		instance.data.audioLink = audioLink
		audioElement.setAttribute("src", audioLink)
		audioElement.setAttribute("preload", "none");
		instance.data.audioElement.classList.add('ZQAudio')
		instance.canvas.append(instance.data.audioElement);
		audioElement.currentTime = 0
		instance.publishState("current_time", "00:00");
		// Event listener for the actual audioElement
		audioElement.addEventListener('loadedmetadata', function() {
			slider.setAttribute("max", audioElement.duration);
			instance.data.duration = instance.data.getTime(audioElement.duration);
			instance.publishState("duration", instance.data.duration);
		});
		instance.publishState('audio_ready_state', false);
		audioElement.addEventListener('canplaythrough', function() {
			instance.publishState('audio_ready_state', true); // Update the state to true when ready
		});
		function loadAudioMetadata(url) {
			let tempAudio = new Audio();
			tempAudio.addEventListener('loadedmetadata', function() {
				// Set up the slider with actual duration
				instance.data.duration = instance.data.getTime(tempAudio.duration)
				instance.publishState("duration", instance.data.duration)
				if (sliderStyle.textContent) {
					slider.setAttribute("max", audioElement.duration)
					slider.value = "0"
				} else {

					sliderStyle.textContent = `.slider {
    				width: 98%;
                    height: 2px;
                    background: ${properties.slider_color};
                    -webkit-appearance: none;
                    outline: none;
                    border-radius: 2px;
                	}

                .slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: ${properties.slider_thumb_color};
                	}`

					document.head.appendChild(sliderStyle);

					slider.setAttribute("type", "range")
					slider.setAttribute("class", "slider")
					slider.setAttribute("value", audioElement.currentTime)
					slider.setAttribute("min", "0")
					slider.setAttribute("max", audioElement.duration)

					slider.addEventListener("mouseup", function (e) {
						isMouseDown = false
						instance.data.now = "playerSkip"
						changeValue(e.target.value);

						function changeValue(value) {
							audioElement.currentTime = value
							audioElement.play()
							instance.publishState("isplaying", true)
							let x = setInterval(function () {
								if ((!isMouseDown) && (instance.data.now === "playerSkip")) {
									slider.value = audioElement.currentTime
									instance.publishState("current_time",
										instance.data.getTime(audioElement.currentTime));
								} else {
									clearInterval(x)
								}
							}, 1000)
						}

					})

					// START MOBILE TOUCH EVENTS

					slider.addEventListener("touchend", function (e) {
						isMouseDown = false
						instance.data.now = "playerSkip"
						changeValue(e.target.value);

						function changeValue(value) {
							audioElement.currentTime = value
							audioElement.play()
							instance.publishState("isplaying", true)
							let x = setInterval(function () {
								if ((!isMouseDown) && (instance.data.now === "playerSkip")) {
									slider.value = audioElement.currentTime
									instance.publishState("current_time",
										instance.data.getTime(audioElement.currentTime));
								} else {
									clearInterval(x)
								}
							}, 1000)
						}

					})

					slider.addEventListener("touchstart", function (e) {
						isMouseDown = true
						slider.value = e.target.value
					})



					//END MOBILE TOUCH EVENTS



					slider.addEventListener("mousedown", function (e) {
						isMouseDown = true
						slider.value = e.target.value
					})

					audioElement.addEventListener('ended', function () {
						instance.publishState("isplaying", false)
						instance.data.now = "playerEnd"
						slider.value = 0
						instance.triggerEvent("audio_ended")
						instance.publishState("current_time", "00:00")
					});

					slider.max = audioElement.duration;
					instance.canvas.appendChild(slider);
					instance.data.slider = slider;
				}
				tempAudio = null; // Clean up
			});

			tempAudio.src = url;
		}
		loadAudioMetadata(audioLink);
	}


}