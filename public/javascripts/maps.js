var drawChicagoMap = function drawMap(){
  chicagoCoordinates = new google.maps.LatLng(41.8789, -87.6358);
  mapOptions = {
    zoom: 12,
    center: chicagoCoordinates
  }
  return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

var addMapMarkers = function addMarkers(chicagoData, map){
  $.each(chicagoData, function addMarkersToEach(index, dataRecord){
    createMapMarker(map, dataRecord);
  });
  return map;
};

var createMapMarker = function createMarker(map, dataRecord){
  markerLatLng = new google.maps.LatLng(dataRecord['latitude'],dataRecord['longitude']);
  newMarkerLocationInformation = setLocationInformation(dataRecord);
  newMarker = new google.maps.Marker({
    position: markerLatLng,
    clickable: true,
    icon: '../style/red-marker.png',
    map: map
  });
  createInfoWindow(newMarker, newMarkerLocationInformation, map)
  google.maps.event.addListener(newMarker, 'click', function() {
    dataWindow.open(map,newMarker);
  });
  return newMarker;
};

var createInfoWindow = function createWindow(marker, locationInfo, map){
  dataWindow = new google.maps.InfoWindow({
    content: locationInfo
  })
}

var setLocationInformation = function setInformation(dataRecord){
  locationInformation = $('<div class="mapInfoWindow">'+
    '<h4>' + dataRecord['street_address'] + '</h4>'+
        '<h5>Days Open:  '+ dataRecord['days_elapsed_since_request'] + '</h5>' +
        '<h5>Ward:  '+ dataRecord['ward'] + '</h5>' +
        '<h5>Zip Code:  '+ dataRecord['zip_code'] + '</h5>' +
  '</div>')
  return locationInformation[0];
}


