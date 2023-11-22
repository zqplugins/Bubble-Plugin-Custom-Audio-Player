function(instance, properties, context) {
	instance.publishState("isplaying", false)
    instance.data.now = "pause"
	instance.data.audioElement.pause(); 
    instance.publishState("current_time", instance.data.getTime(instance.data.audioElement.currentTime));

}