var followsURL = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels";

//function to render all streamers
function renderAllFollowers(){
    //get list of followers
    $.getJSON(followsURL, function(data2){
        //iterate thru the follows array -- this is for all of them
       for(i = 0; i < data2.follows.length; i++){
           //check status
            if(data2.follows[i].channel.status){
               var status = data2.follows[i].channel.status; 
            }
            else {
                var status = "OFFLINE";   
            }
           
           //assign display name
           var displayName = data2.follows[i].channel.display_name;
           
        
           //check logo, assign default if falsy            
           if (data2.follows[i].channel.logo){
                var logo = data2.follows[i].channel.logo;
           }
           else{
               var logo = "resources/images/glitch-default-logo.png"
           }
           
           //assign streamer url
           var streamerURL = "https://twitch.tv/" + displayName;
           
           $('#followerInfo').append('<div class = "row"><div class="col-md-4"><a href="' + streamerURL + '" target = "_blank"><img src="' + logo + '" width = "50px"></a></div><div class="col-md-4"><a href="' + streamerURL + '" target = "_blank">' + displayName + '</a></div><div class="col-md-4">' + status + '</div></div>'); 
       }
        
    });
}

//function to render online streamers
function renderOnlineFollowers(){
    $.getJSON(followsURL, function(data2){
        for(i = 0; i < data2.follows.length; i++){
            if(data2.follows[i].channel.status){
                var displayName = data2.follows[i].channel.display_name;
                var status = data2.follows[i].channel.status; 
                var streamerURL = "https://twitch.tv/" + displayName;
                if (data2.follows[i].channel.logo){
                    var logo = data2.follows[i].channel.logo;
                }
                else{
                    var logo = "resources/images/glitch-default-logo.png"
                }
                            
                $('#followerInfo').append('<div class = "row"><div class="col-md-4"><a href="' + streamerURL + '" target = "_blank"><img src="' + logo + '" width = "50px"></a></div><div class="col-md-4"><a href="' + streamerURL + '" target = "_blank">' + displayName + '</a></div><div class="col-md-4">' + status + '</div></div>'); 
                }       
        }      
    }); 
}

//funciton to show offline streamers
function renderOfflineFollowers(){
    $.getJSON(followsURL, function(data2){
        for(i = 0; i < data2.follows.length; i++){
            if(!data2.follows[i].channel.status){
                var displayName = data2.follows[i].channel.display_name;
                var status = "OFFLINE"; 
                var streamerURL = "https://twitch.tv/" + displayName;
                if (data2.follows[i].channel.logo){
                    var logo = data2.follows[i].channel.logo;
                }
                else{
                    var logo = "resources/images/glitch-default-logo.png"
                }
                            
                $('#followerInfo').append('<div class = "row"><div class="col-md-4"><a href="' + streamerURL + '" target = "_blank"><img src="' + logo + '" width = "50px"></a></div><div class="col-md-4"><a href="' + streamerURL + '" target = "_blank">' + displayName + '</a></div><div class="col-md-4">' + status + '</div></div>'); 
                }       
            }      
        }); 
                                                
}

// controls the buttons: all, online, offline
$('#show-all').click(function(){
    $('#followerInfo').html("");
    $('#followerInfo').append('You clicked SHOW ALL');
    renderAllFollowers();
});   

$('#show-online').click(function(){
    $('#followerInfo').html("");
    $('#followerInfo').append('You clicked show ONLINE'); 
    renderOnlineFollowers();
});

$('#show-offline').click(function(){
    $('#followerInfo').html("")
    $('#followerInfo').append('You clicked show OFFLINE');
    renderOfflineFollowers();
});

// run this stuff when the document loads
$(document).ready(function(){
    // fcc info and status api call
    var fccURL = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
    $.getJSON(fccURL, function(data1){
        if(data1.stream===null){
            $("#fccstatus").html("Free Code Camp is Offline");
        }
        else{
            $('#fccstatus').html("Free Code Camp is Streaming Live");
        }
    });
    
   renderAllFollowers();    
});

