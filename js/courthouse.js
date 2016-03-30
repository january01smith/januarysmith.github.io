var map;

function initMap() {
    // Create google map object and attach it to <div id='map'>
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {
            lat: 31.5,
            lng: -100.0
        },
        disableDefaultUI: false
    });

    var countyLayer = new google.maps.KmlLayer({
        url: 'https://raw.githubusercontent.com/januarysmith/januarysmith.github.io/master/courthouse/texas_counties.kml',
        map: map
    });

    countyLayer.setMap(map);

    var centerControlDiv = document.createElement('div');
          var centerControl = new CenterControl(centerControlDiv, map);

          centerControlDiv.index = 1;
          map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDiv);

}

function CenterControl(controlDiv, map) {
                
    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#337ab7';
    controlUI.style.border = '2px solid #337ab7';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.color = 'white';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '10px';
    controlText.style.paddingRight = '10px';
    controlText.innerHTML = 'Texas County Courthouse Tours';
    controlUI.appendChild(controlText);

    // Setup the click event listeners
    controlUI.addEventListener('click', function() {
    map.setZoom(7);
    map.setCenter({lat: 31.5, lng: -100.0});

    });
                
}