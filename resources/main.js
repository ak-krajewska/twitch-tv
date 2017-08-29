// run our jquery on load
$(document).ready(function(){
    // fcc infor and status api call
    var fccURL = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
    $.getJSON(fccURL, function(data1){
        if(data1.stream===null){
            //do something
            $("#fccstatus").html("Free Code Camp is Offline");
        }
        else{
            //do something else
            $('#fccstatus').html("Free Code Camp is Streaming Live");
        }
    });
    
    //get list of followers
    var followsURL = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels";
    $.getJSON(followsURL, function(data2){
       console.log(data2); 
        //iterate thru the follows array
       for (i = 0; i < data2.follows.length; i++){
           var displayName = data2.follows[i].channel.display_name;
           
           if (data2.follows[i].channel.status){
               var status = data2.follows[i].channel.status; //add if statement for null to be offline
            }
            else {
                var status = "OFFLINE";   
            }
           
           
           
           if (data2.follows[i].channel.logo){
                var logo = data2.follows[i].channel.logo;
           }
           else{
               var logo = "resources/images/glitch-default-logo.png"
           }
           console.log(logo);
           var streamerURL = "https://twitch.tv/" + displayName;
           console.log(streamerURL);
           
           $('#followerInfo').append('<div class = "row"><div class="col-md-4"><a href="' + streamerURL + '" target = "_blank"><img src="' + logo + '" width = "50px"></a></div><div class="col-md-4"><a href="' + streamerURL + '" target = "_blank">' + displayName + '</a></div><div class="col-md-4">' + status + '</div></div>')
       }
    });
    
});

//https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels