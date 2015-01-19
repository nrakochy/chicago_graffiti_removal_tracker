var mapMarkers = [];
var globalInfoWindow;

var initializeMapMarkers = function initializeMarkers(graffitiData, chicagoMap){
  initializeInfoWindow();
  createMapMarkers(graffitiData, chicagoMap);
  return mapMarkers;
}

function createMapMarkers(chicagoData, map){
  $.each(chicagoData, function addMarkersForEach(index, dataRecord){
    createMapMarker(map, dataRecord);
  });
};

function createMapMarker(map, dataRecord){
  var myLatLng = new google.maps.LatLng(dataRecord['latitude'],dataRecord['longitude']);
  var newMarkerLocationInformation = setLocationInformation(dataRecord);
  var newMapMarker = new google.maps.Marker({
    position: myLatLng,
    clickable: true,
    icon: '../images/red-marker.png',
    maxWidth: 150,
    map: null
  });

  bindInfoWindowData(map, newMapMarker, globalInfoWindow, newMarkerLocationInformation);
  mapMarkers.push(newMapMarker);
}

function initializeInfoWindow(){
  globalInfoWindow = new google.maps.InfoWindow({
    content: '',
  })
};

function bindInfoWindowData(map, marker, windowObj, windowData){
  google.maps.event.addListener(marker, 'click', function googleClickListener() {
      windowObj.setContent(windowData);
      windowObj.open(map, marker);
  });
}

function setLocationInformation(dataRecord){
  var locationInformation =
    $('<div class="mapInfoWindow">'+
      '<h4>'             + dataRecord['street_address']             + '</h4>' +
      '<h5>Days Open:  ' + dataRecord['days_elapsed_since_request'] + '</h5>' +
      '<h5>Ward:  '      + dataRecord['ward']                       + '</h5>' +
      '<h5>Zip Code:  '  + dataRecord['zip_code']                   + '</h5>' +
      '</div>')
  return locationInformation[0];
}


