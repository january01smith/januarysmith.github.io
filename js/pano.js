var panoramaOptions;
var panorama = google.maps.StreetViewPanorama;
var map = google.maps.Map;
var panoArray=[{panoName:"Advanced Smile Care", panoID:"FJ2zWEuz4QoAAAQYaKhd7A", panoLat:29.565453, panoLng:-98.558403},
                {panoName:"Aladdin Carpets", panoID:"0kMPde70qqwAAAGuvY_iuw", panoLat:29.447252, panoLng:-98.485045}];

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
          zoom: 11
        });
// Set up the markers on the map
    mapMarkers[0] = new google.maps.Marker({
          position: {lat: 29.565453, lng: -98.558403},
          map: map,
          title: "Advanced Smile Care"
      });
    mapMarkers[0].addListener('click', function () {
        setPano("FJ2zWEuz4QoAAAQYaKhd7A");
    });
//==================================================================
    mapMarkers[1] = new google.maps.Marker({
          position: {lat: 29.447252, lng: -98.485045},
          map: map,
          title: "Aladdin Carpets"
      });
    mapMarkers[1].addListener('click', function () {
        setPano("0kMPde70qqwAAAGuvY_iuw");
    });
//==================================================================
    mapMarkers[2] = new google.maps.Marker({
          position: {lat: 29.601648, lng: -98.526543},
          map: map,
          title: "Alamo City Liquor"
      });
    mapMarkers[2].addListener('click', function () {
        setPano("3LESd3zuvjQAAAQn71PiPA");
    });
//==================================================================
    mapMarkers[2] = new google.maps.Marker({
          position: {lat: 29.686212, lng: -98.457759},
          map: map,
          title: "Alamo City Liquor"
      });
    mapMarkers[2].addListener('click', function () {
        setPano("xayNqk0grVIAAAQn71PkLQ");
    });
}

