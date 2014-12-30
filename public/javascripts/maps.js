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
    title: dataRecord['street_address'],
    clickable: true
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
  locationInformation = $('<div class="locationData">'+
    '<h3 class="markerHeading">' + dataRecord['street_address'] + '</h3>'+
    '<div class="markerContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large Rock </p>' +
    '</div>'+
  '</div>')
  return locationInformation[0];
}


