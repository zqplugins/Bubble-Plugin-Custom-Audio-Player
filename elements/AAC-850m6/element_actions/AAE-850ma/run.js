function(instance, properties, context) {

	instance.data.now = ("play")
    instance.data.audioElement.play(); 
    instance.publishState("isplaying", true)
    
  	var x = setInterval(function(){
     
        if (instance.data.now === "play"){
        
    var currentTime = instance.data.audioElement.currentTime ; 
    instance.publishState("current_time", instance.data.getTime(currentTime));
    instance.data.slider.value = currentTime
    }   else {clearInterval(x)}   
        
    }, 1000)
    
    
}