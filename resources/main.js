// run our jquery on load
$(document).ready(function(){
    // fcc infor and status api call
    var url = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
    $.getJSON(url, function(data1){
        if(data1.stream===null){
            //do something
            $("#fccstatus").html("Free Code Camp is Offline");
        }
        else{
            //do something else
            $('#fccstatus').html("Free Code Camp is Streaming Live");
        }
    })
})