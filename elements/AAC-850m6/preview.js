function(instance, properties) {

    
    var sliderPreview = document.createElement("style") 
     var slider = document.createElement("Input")
    		slider.setAttribute("type", "range")
            slider.setAttribute("value", 0),
            slider.setAttribute("min", 0),
            slider.setAttribute("max", 100)
    
    sliderPreview.textContent = `.slider {
    width: 100%;
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
    
    
    document.head.appendChild(sliderPreview);
    
    slider.setAttribute("class", "slider")
    
    
    document.body.appendChild(slider)


}