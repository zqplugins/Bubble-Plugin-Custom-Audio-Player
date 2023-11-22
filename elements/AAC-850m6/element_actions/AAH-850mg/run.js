function(instance, properties, context) {

   	var currentTime
    
    instance.data.now = "skipAhead"
 	instance.data.audioElement.currentTime += properties.time;
    instance.data.audioElement.play();
    var x = setInterval(function(){
        
        if (instance.data.now === "skipAhead"){
    instance.publishState("isplaying", true)        
    currentTime = instance.data.audioElement.currentTime ; 
    instance.publishState("current_time", instance.data.getTime(currentTime));
    instance.data.slider.value = currentTime
        
    } else {clearInterval(x)}
        
    }, 1000)
   
}