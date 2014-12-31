var initialize = function(graffitiData){
  createFormInputAutocomplete();
  chicagoMap = drawChicagoMap();
  addMapMarkers(graffitiData, chicagoMap);
}

var drawChicagoMap = function drawMap(){
  chicagoCoordinates = new google.maps.LatLng(41.8789, -87.6358);
  mapOptions = {
    zoom: 11,
    center: chicagoCoordinates
  }
  baseMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  return baseMap;
}

var addMapMarkers = function addMarkers(chicagoData, map){
  $.each(chicagoData, function addMarkersForEach(index, dataRecord){
    createMapMarker(map, dataRecord);
  });
};

var createMapMarker = function createMarker(map, dataRecord){
  myLatLng = new google.maps.LatLng(dataRecord['latitude'],dataRecord['longitude']);
  newMarkerLocationInformation = setLocationInformation(dataRecord);
  dataWindow = new google.maps.InfoWindow({
    content: ""
  })

  newMapMarker = new google.maps.Marker({
    position: myLatLng,
    clickable: true,
    icon: '../style/red-marker.png',
    map: map
  });

  bindInfoWindowData(map, newMapMarker, dataWindow, newMarkerLocationInformation);
};

var bindInfoWindowData = function bindWindowData(map, marker, windowObj, windowData){
  google.maps.event.addListener(marker, 'click', function googleClickListener() {
    windowObj.setContent(windowData);
    windowObj.open(map, marker)
  });
}

var setLocationInformation = function setInformation(dataRecord){
  locationInformation =
    $('<div class="mapInfoWindow">'+
      '<h4>'             + dataRecord['street_address']             + '</h4>' +
      '<h5>Days Open:  ' + dataRecord['days_elapsed_since_request'] + '</h5>' +
      '<h5>Ward:  '      + dataRecord['ward']                       + '</h5>' +
      '<h5>Zip Code:  '  + dataRecord['zip_code']                   + '</h5>' +
      '</div>')
  return locationInformation[0];
}

var createFormInputAutocomplete = function createAutocomplete(){
  searchInput = (document.getElementById('searchLocation'));
  searchAutoComplete = new google.maps.places.Autocomplete(searchInput);
  google.maps.event.addListener(searchAutoComplete, 'place_changed', function (){
    searchAutoComplete.getPlace();
  });
  google.maps.event.addListener(searchInput, 'click', function(){
    searchInput.value = '';
  });
};
