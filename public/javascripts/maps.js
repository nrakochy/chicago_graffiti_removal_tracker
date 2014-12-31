var drawChicagoMap = function drawMap(){
  chicagoCoordinates = new google.maps.LatLng(41.8789, -87.6358);
  mapOptions = {
    zoom: 12,
    center: chicagoCoordinates
  }
  return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

var addMapMarkers = function addMarkers(chicagoData, map){
  $.each(chicagoData, function addMarkersForEach(index, dataRecord){
    createMapMarker(map, dataRecord);
  });
};

var createMapMarker = function createMarker(map, dataRecord){
  markerLatLng = new google.maps.LatLng(dataRecord['latitude'],dataRecord['longitude']);
  newMarkerLocationInformation = setLocationInformation(dataRecord);
  dataWindow = new google.maps.InfoWindow({
    content: ""
  })

  newMapMarker = new google.maps.Marker({
    position: markerLatLng,
    clickable: true,
    icon: '../style/red-marker.png',
    map: map
  });

  bindInfoWindow(map, newMapMarker, dataWindow, newMarkerLocationInformation);
};

var bindInfoWindow = function bindWindow(map, marker, windowObj, windowData){
  google.maps.event.addListener(marker, 'click', function googleClickListener() {
    windowObj.setContent(windowData);
    windowObj.open(map, marker)
  });


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


