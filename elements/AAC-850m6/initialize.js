function(instance, context) {
	
    instance.publishState("isplaying", false)
    instance.data.audioReady = false
    instance.publishState("current_time", "00:00")
    instance.data.audioLink = null
   	instance.data.audioElement = document.createElement("Audio")
    instance.data.sliderStyle = document.createElement("style") 
    instance.data.slider = document.createElement("Input")
    instance.data.now = "start"
    instance.data.getTime = function getTime(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay ;
    var mDisplay ;
    var sDisplay ;
   
   
   hDisplay = h > 0 ? h + ":" : "";
   
   if (m === 0) {
     mDisplay = "00:"
   } else if (m < 10) {
     mDisplay = "0" + m + ":"
   } else mDisplay = m + ":"
   
   if (s === 0) {
     sDisplay = "00"
   } else if (s < 10) {
     sDisplay = "0" + s
   } else sDisplay = s
   
    return hDisplay + mDisplay + sDisplay; 
	}
}