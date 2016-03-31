var panoramaOptions;
var panorama = google.maps.StreetViewPanorama;
var map = google.maps.Map;
var panoArray=[{panoName:"Advanced Smile Care", panoID:"FJ2zWEuz4QoAAAQYaKhd7A", panoLat:29.565453, panoLng:-98.558403},
                {panoName:"Aladdin Carpets", panoID:"0kMPde70qqwAAAGuvY_iuw", panoLat:29.447252, panoLng:-98.485045},
                {panoName:"Alamo City Liquor(Bitters)", panoID:"3LESd3zuvjQAAAQn71PiPA",panoLat:29.601648, panoLng: -98.526543},
                {panoName:"Alamo City Liquor(Stone Oak)", panoID:"xayNqk0grVIAAAQn71PkLQ",panoLat:29.686212, panoLng: -98.457759},
                {panoName:"Alamo City Liquor(Thousand Oaks)", panoID:"6ni33-DZbWgAAAQn7zMmVA",panoLat:29.578264, panoLng: -98.438370},
                {panoName:"Alamo Heights Pet Clinic", panoID:"nQ8NTZKDf-QAAAQYk4EKnQ",panoLat:29.490081, panoLng: -98.457695},
                {panoName:"Alamo Karts", panoID:"5fJuBj5J-REAAAQWzI7wUw",panoLat:29.682350, panoLng: -98.638402},
                {panoName:"Anytime Fitness (Copperas Cove)", panoID:"Y1An91S9jiwAAAQfDZMTTA",panoLat:31.119222, panoLng: -97.861912},
                {panoName:"Anytime Fitness (CityBase)", panoID:"R0_8yVt6j3kAAAQo8T7Efw",panoLat:29.349458, panoLng: -98.434822},
                {panoName:"Anytime Fitness (Kerrville)", panoID:"Wlg9RQHTl5MAAAQppySsIw",panoLat:30.056373, panoLng: -99.162101},
                {panoName:"Anytime Fitness (Medical Center)", panoID:"3w4JH0LM84sAAAQfDSpDgg",panoLat:29.527010, panoLng: -98.597293},
                {panoName:"Anytime Fitness (Victoria)", panoID:"6td18GXVNrsAAAQfDpMxZg",panoLat:28.814914, panoLng: -96.963887},
                {panoName:"Augustine Law Office", panoID:"SsOj0Ec5D8UAAAQYlGXWEw",panoLat:29.455678, panoLng: -98.470808},
                {panoName:"Aziz Rugs", panoID:"SrJyK05t4JUAAAQXMBew5w",panoLat:29.606979, panoLng: -98.524811},
                {panoName:"Battle Tactics Academy", panoID:"vJctMB0EZ_IAAAQvOdg8iA",panoLat:29.532183, panoLng: -98.451792},
                {panoName:"Bec Dental Center", panoID:"3GGcgAi70doAAAGutXiSSA",panoLat:29.523202, panoLng: -98.570166},
                {panoName:"Boba Sip", panoID:"Ua-ZYoTJrf4AAAQzS_H88w",panoLat:29.546969, panoLng: -98.577417},
                {panoName:"Buddys Home Furnishings", panoID:"xT7C9_mSvkYAAAQo8i8LLw",panoLat:29.497153, panoLng: -98.624938},
                {panoName:"Dr Robert Heinrich DDS", panoID:"FIENVsE_8Q8AAAQ0IuJaOA",panoLat:29.724965, panoLng: -98.097117},
                {panoName:"Embrace Orthodontics", panoID:"WKsMvcBH2yoAAAQvOhFGhQ",panoLat:29.570798, panoLng: -98.233303},
                {panoName:"Eraser Clinic Tattoo Removal", panoID:"VOWJxZ7uQPUAAAQvOXfv3Q",panoLat:29.527706, panoLng: -98.503963},
                {panoName:"ExploreUSA", panoID:"D76VCMWIRnUAAAQp2bIJ2w",panoLat:29.550692, panoLng: -98.036970},
                {panoName:"Frio Country Resort", panoID:"O9rxMjIMX3MAAAQz45ucEw",panoLat:29.513800, panoLng: -99.698603},
                {panoName:"Futon Furniture Store", panoID:"Vv5NZl5pQCQAAAAGOwb0OQ",panoLat:29.532587, panoLng: -98.561023},
                {panoName:"Gems of the Hill Country", panoID:"QK4oox8JiA0AAAQfCMrg5w",panoLat:30.073919, panoLng: -99.238055},
                {panoName:"Greg Liquors", panoID:"rATG2tZNTW0AAAQfDpGjuQ",panoLat:28.817666, panoLng: -96.968063},
                {panoName:"Heavenly Floral Designs", panoID:"tzD3Caye_D0AAAQo8ZL-lg",panoLat:29.540911, panoLng: -98.582597},
                {panoName:"Irish Embassy Pub", panoID:"E2j3A7gI3uIAAAAGOt2O0w",panoLat:37.273595, panoLng: -107.879859},
                {panoName:"Law Offices Jesus Lopez", panoID:"dMEdw05BcMcAAAQfCWsl6A",panoLat:29.428097, panoLng: -98.508308},
                {panoName:"Museum of Western Art", panoID:"KSNieaMzWxUAAAQfCM6ATw",panoLat:30.024534, panoLng: -99.136563},
                {panoName:"Mustang Inn", panoID:"o4Ov86GPviwAAAQo8Xs4bA",panoLat:29.357899, panoLng: -98.557801},
                {panoName:"Oriental Rug Gallery of Texas", panoID:"zF3TaoiCVywAAAQfCXQ69A",panoLat:29.519818, panoLng: -98.502034},
                {panoName:"Owens Liquor", panoID:"BKWPfinJShcAAAQY7LbxcA",panoLat:29.371082, panoLng: -100.899824},
                {panoName:"Re-Bath(Bandera)", panoID:"cLCKP5fp3HkAAAQqyep5VA",panoLat:29.554925, panoLng: -98.661790},
                {panoName:"Re-Bath(Schertz)", panoID:"aDPpegoQLq0AAAQun3JKpg",panoLat:29.596870, panoLng: -98.276947},
                {panoName:"Rustic Gallery", panoID:"MIvQErKabRIAAAQzTy9ueA",panoLat:29.609477, panoLng: -98.512853},
                {panoName:"Sew Special", panoID:"ZwK9tfC2mbUAAAGu5veOcg",panoLat:29.593092, panoLng: -98.586740},
                {panoName:"Southpoint Auto", panoID:"Td5aLrTMBRQAAAQn7ypgTQ",panoLat:29.359857, panoLng: -98.524395},
                {panoName:"Stone Oak Orthodontics", panoID:"7AlEB4CrUJ0AAAQZUItWcQ",panoLat:29.609772, panoLng: -98.490034},
                {panoName:"Thanks for Vaping(Blanco)", panoID:"C2kLyCMFAagAAAQZZXWq9w",panoLat:29.587918, panoLng: -98.513674},
                {panoName:"Thanks for Vaping(IH35)", panoID:"d7bkGhjHJC4AAAQn7zSkOA",panoLat:29.576175, panoLng: -98.323559},
                {panoName:"Thanks for Vaping(San Pedro)", panoID:"QrXJ_xFAMuYAAAQZZXWRWQ",panoLat:29.515733, panoLng: -98.499394},
                {panoName:"The French Connection", panoID:"f7VRQmL_7OIAAAQZSJejTA",panoLat:29.471332, panoLng: -98.462432},
                {panoName:"Thrifty Liquor(Huebner)", panoID:"H_Of3Fdvz2UAAAAGOvYGbQ",panoLat:29.572307, panoLng: -98.545948},
                {panoName:"Thrifty Liquor(IH10)", panoID:"Xeoxf4UuavAAAAAGO0OFbw",panoLat:29.664345, panoLng: -98.631527},
                {panoName:"Trinity Baptist Church", panoID:"KC5Num7C7esAAAQpkPq5lQ",panoLat:29.457167, panoLng: -98.486776},
                {panoName:"Two Shots Liquor", panoID:"6Arw6wSpF5EAAAQn70HT7A",panoLat:29.444236, panoLng: -98.658982},
                {panoName:"Urban Mattress", panoID:"slMaViq0cl0AAAQqZcRMsQ",panoLat:29.607616, panoLng: -98.500562},
                {panoName:"VK Orthodontics", panoID:"kwS24V_TbMsAAAQo8a_bKg",panoLat:29.592411, panoLng: -98.468118},
                {panoName:"The Vapor Room", panoID:"04pmXlJmKwEAAAQZLBEVPA",panoLat:29.562775 , panoLng: -98.599628},
                {panoName:"Wilson Family Chiropractic", panoID:"Vfw74XkEKb4AAAQYZ4bijw",panoLat:30.052585 , panoLng: -99.147840},
                {panoName:"Winters Gallery", panoID:"50p19NuDtiMAAAQXH9V90A",panoLat:30.072854, panoLng: -99.244233},
                {panoName:"W Dental", panoID:"Nm0g8bk0qsAAAAQqfeeJ7w",panoLat:29.459226, panoLng: -98.639261},
                {panoName:"Xpressions Florist", panoID:"0JvML8_mn_UAAAQo8amSoQ",panoLat:29.573044, panoLng: -98.514842},
                {panoName:"Yummiberry Yogurt", panoID:"z7lGzsBJlVAAAAAGOo4dUA",panoLat:29.562960 , panoLng: -98.585591}];

$(document ).ready(function() {
    //================================================================
    //
    // Set User Preferences
    //
    //================================================================
    var upPanoID = "UQiOsNn5YTMAAAQpe5pnqg"
    var upHeading = 0;
    var upPitch = 0;
    var upZoomLevel = 0;
    var upEnableAutoRotate = true;
    var upEnableAddress = false;
    var upEnablePan = false;
    var upEnableZoom = false;
    var upEnableLinks = true;
    var upEnableClickToGo = false;
    var upEnableScrollWheel = false;
    var upEnableClickToDisableAutoRotate = true;
    var upEnableShowLinksAfterDisableAutoRotate = true;

    //================================================================
    //
    // Set google.maps.StreetViewPanoramaOptions object to User Preference values
    //
    //================================================================
    panoramaOptions = {
            pano: upPanoID,
            zoom: upZoomLevel,
            panControl: upEnablePan,
            zoomControl:  upEnableZoom,
            addressControl:  upEnableAddress,
            linksControl: upEnableLinks,
            clickToGo: upEnableClickToGo,
            scrollwheel: upEnableScrollWheel,
            fullscreenControl: false,
            pov: {
              heading: upHeading,
              pitch: upPitch
              }
            };

    //================================================================
    // If option to auto rotate the panorama is selected
    // then set interval timer that rotates point of view 
    // by incrementing heading .1 degree every 20 milli seconds 
    //================================================================    
    if (upEnableAutoRotate) {
        var myTimer = window.setInterval(function() {
            var pov = panorama.getPov();
            pov.heading += 0.1;       
            panorama.setPov(pov);
        }, 20);
    }

    buildModalList(panoArray);

    //================================================================
    // Instantiate panorama with user specified options
    //================================================================
    panorama = new google.maps.StreetViewPanorama(document.getElementById('myPano'), panoramaOptions);

    //================================================================
    // Add listener to handle click event that will stop auto rotate
    //================================================================
    var mapClickEvent = google.maps.event.addDomListener(document.getElementById('myPano'), 'click', toggleAutoRotate);

    //================================================================
    // Show panorama
    //================================================================
    panorama.setVisible(true);

//================================================================
// If option to turn_off_aut_rotate_when_you_click the panorama is selected
// then turn off interval timer that rotates point of view heading and turn on 
// links control so you can navigate virtual tour
//================================================================
function toggleAutoRotate() {
  if(upEnableClickToDisableAutoRotate) {
    if(upEnableAutoRotate){window.clearInterval(myTimer)
    } else {
       myTimer = window.setInterval(function() {
            var pov = panorama.getPov();
            pov.heading += 0.1;       
            panorama.setPov(pov);
        }, 20); 
   }
    upEnableAutoRotate=!upEnableAutoRotate;   
    if(upEnableShowLinksAfterDisableAutoRotate){
      panorama.setOptions({linksControl:"true"});
      }
  }
} 

function buildModalList(panoArray){
var panoObj={}
for(i=0; i<panoArray.length; i++){
    panoObj=panoArray[i];
    $('#panoList').append('<li>'+
                          '<a href="#"" onclick="setPano(\''+ panoObj.panoID +'\');">'+ panoObj.panoName +'</a>'+
                          '</li>');
    }
}

});

 
//================================================================
//
// This function is called when a selection is made from the modal pano list it changes 
//   the panoID to update the virtual tour displayed and hides the modal dialog box
//
//================================================================
function setPano(panoID){
    panorama = new google.maps.StreetViewPanorama(document.getElementById('myPano'), panoramaOptions);
    panorama.setOptions({pano:panoID});
    $('#panoModal').modal('hide');
}

function setMap(){
    var mapMarkers=[];
    var sanAntonio = {lat: 29.425572, lng: -98.485857};
    map = new google.maps.Map(document.getElementById('myPano'), {
          center: sanAntonio,
          zoom: 7
        });

for(i=0; i<panoArray.length; i++){
    var panoObj=panoArray[i];
    mapMarkers[i] = new google.maps.Marker({
          position: { lat:panoObj.panoLat, lng: panoObj.panoLng},
          map: map,
          title: panoObj.panoName
      });
    setMarkerListner(mapMarkers[i], panoObj.panoID);
    };

}

function setMarkerListner(marker,panoID){
marker.addListener('click', function () {
        setPano(panoID);
});
}

