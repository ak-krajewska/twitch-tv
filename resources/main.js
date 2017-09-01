var followsURL = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels";

//generic function to write the rows
function writeRows(data2){
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
           
            //display the row
            
            $('#followerInfo').append('<div class = "row followers"><div class="col-md-2"><a href="' + streamerURL + '" target = "_blank"><img src="' + logo + '" width = "50px" class="img-circle"></a></div><div class="col-md-4"><h3><a href="' + streamerURL + '" target = "_blank">' + displayName + '</a></h3></div><div class="col-md-6"><p>' + status + '</p></div></div>'); 
            
            //$('#followerInfo').append('<p>' + logo + displayName + status + '</p>');
            
}



//function to render all streamers
function renderAllFollowers(){
    //get list of followers
    $.getJSON(followsURL, function(data2){ 
       for(i = 0; i < data2.follows.length; i++){
           writeRows(data2);
       }    
    });
}

//function to render online streamers
function renderOnlineFollowers(){
    $.getJSON(followsURL, function(data2){
        for(i = 0; i < data2.follows.length; i++){
            if(data2.follows[i].channel.status){ 
                writeRows(data2);
            }      
        }      
    }); 
}

//funciton to show offline streamers
function renderOfflineFollowers(){
    $.getJSON(followsURL, function(data2){
        for(i = 0; i < data2.follows.length; i++){
            if(!data2.follows[i].channel.status){
                writeRows(data2);
            }       
        }      
    });                                                
}

// controls the buttons: all, online, offline
$('#show-all').click(function(){
    $('#followerInfo').html("");
    renderAllFollowers();
});   

$('#show-online').click(function(){
    $('#followerInfo').html("");
    renderOnlineFollowers();
});

$('#show-offline').click(function(){
    $('#followerInfo').html("")
    renderOfflineFollowers();
});

// run this stuff when the document loads
$(document).ready(function(){
    // fcc info and status api call
    var fccURL = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
    $.getJSON(fccURL, function(data1){
        if(data1.stream===null){
            console.log(data1);
            $("#fccstatus").html("OFFLINE");
        }
        else{
            $('#fccstatus').html("streaming now");
        }
    });
    
   renderAllFollowers();    
});

