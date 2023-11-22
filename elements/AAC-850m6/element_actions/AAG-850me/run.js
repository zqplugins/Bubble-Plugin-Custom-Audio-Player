function(instance, properties, context) {
 
    
    instance.publishState("isplaying", false)
    instance.data.now = "stop"
    instance.data.audioElement.pause();
    instance.data.audioElement.currentTime = 0;
    instance.publishState("current_time", "0:00");
    instance.data.slider.value = 0
    
	
}