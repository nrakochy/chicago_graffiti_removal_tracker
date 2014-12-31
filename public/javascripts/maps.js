var initialize = function(graffitiData){
  searchBox = createInputSearchBox();
  chicagoMap = drawChicagoMap();
  addMapMarkers(graffitiData, chicagoMap);
  biasSearchBoxResults(searchBox, chicagoMap);
}

function drawChicagoMap(){

  southwestCornerChicago = new google.maps.LatLng(41.6072, -87.8617);
  northeastCornerChicago = new google.maps.LatLng(42.106111, -87.471111);
  defaultBounds = new google.maps.LatLngBounds(southwestCornerChicago, northeastCornerChicago);
  chicagoCenterCoordinates = new google.maps.LatLng(41.8789, -87.6358);

  mapOptions = {
    zoom: 10,
    center: chicagoCenterCoordinates
  }
  baseMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  baseMap.fitBounds(defaultBounds);
  console.log(baseMap.getBounds());
  return baseMap;
}

function addMapMarkers(chicagoData, map){
  $.each(chicagoData, function addMarkersForEach(index, dataRecord){
    createMapMarker(map, dataRecord);
  });
};

function createMapMarker(map, dataRecord){
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

function bindInfoWindowData(map, marker, windowObj, windowData){
  google.maps.event.addListener(marker, 'click', function googleClickListener() {
    windowObj.setContent(windowData);
    windowObj.open(map, marker)
  });
}

function setLocationInformation(dataRecord){
  locationInformation =
    $('<div class="mapInfoWindow">'+
      '<h4>'             + dataRecord['street_address']             + '</h4>' +
      '<h5>Days Open:  ' + dataRecord['days_elapsed_since_request'] + '</h5>' +
      '<h5>Ward:  '      + dataRecord['ward']                       + '</h5>' +
      '<h5>Zip Code:  '  + dataRecord['zip_code']                   + '</h5>' +
      '</div>')
  return locationInformation[0];
}

function createInputSearchBox(){
  searchInput = (document.getElementById('searchLocation'));
  searchBox = new google.maps.places.SearchBox(searchInput);
  google.maps.event.addListener(searchBox, 'place_changed', function (){
    searchBox.getPlace();
  });
  google.maps.event.addListener(searchInput, 'click', function(){
    searchInput.value = '';
  });
  return searchBox;
};

function biasSearchBoxResults(inputSearchBox, map){
    bounds = map.getBounds();
    inputSearchBox.setBounds(bounds);
}
