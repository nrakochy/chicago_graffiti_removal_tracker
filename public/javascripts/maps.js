var drawChicagoMap = function drawMap(){
  chicagoCoordinates = new google.maps.LatLng(41.8789, -87.6358);
  mapOptions = {
    zoom: 12,
    center: chicagoCoordinates
  }
  return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

var addMapMarkers = function addMarkers(chicagoData, map){
  $.each(chicagoData, function(index, dataRecord){
    marker = createMapMarker(dataRecord);
    marker.setMap(map);
    createInfoWindow(map, marker, dataRecord);
  });
  return map;
};

var createMapMarker = function createMarker(dataRecord){
  markerLatLng = new google.maps.LatLng(dataRecord['latitude'],dataRecord['longitude']);
  newMarker = new google.maps.Marker({
    position: markerLatLng,
    clickable: true,
    icon: '../style/red-marker.png'
  });
  return newMarker;
};

var createInfoWindow = function createWindow(map, marker, dataRecord){
  dataWindow = new google.maps.InfoWindow();
  dataWindow.setContent(populateInfoWindow(dataRecord));
  google.maps.event.addListener(marker, 'click', function() {
    dataWindow.open(map,marker);
  });
  return map;
}

var populateInfoWindow = function populateWindow(dataRecord){
  locationInformation = $('<div class="mapInfoWindow">'+
    '<h4>' + dataRecord['street_address'] + '</h4>'+
        '<h5>Days Open:  '+ dataRecord['days_elapsed_since_request'] + '</h5>' +
        '<h5>Ward:  '+ dataRecord['ward'] + '</h5>' +
        '<h5>Zip Code:  '+ dataRecord['zip_code'] + '</h5>' +
  '</div>')
  return locationInformation[0];
}


