var initialize = function(graffitiData){
  chicagoMap = drawChicagoMap();
  addMapMarkers(graffitiData, chicagoMap);
  searchBox = createInputSearchBox();
  biasSearchBoxResults(searchBox);
}

function drawChicagoMap(){
  chicagoCenterCoordinates = new google.maps.LatLng(41.8789, -87.6358);

  mapOptions = {
    center: chicagoCenterCoordinates,
    zoom: 11
  }
  baseMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
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
  google.maps.InfoWindow.prototype.windowIsOpen = false;
  dataWindow = new google.maps.InfoWindow({
    content: null
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
    if(windowObj.windowIsOpen === false){
        windowObj.setContent(windowData);
        windowObj.open(map, marker);
        windowObj.windowIsOpen = true
    } else {
      windowObj.close();
      windowObj.windowIsOpen = false
    }
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
  return searchBox;
};

function biasSearchBoxResults(inputSearchBox){
    searchBounds = setSearchBoxBounds();
    inputSearchBox.setBounds(searchBounds);
}

function setSearchBoxBounds(){
  southwestCornerChicago = new google.maps.LatLng(41.6072, -87.8617);
  northeastCornerChicago = new google.maps.LatLng(42.106111, -87.471111);
  cityBounds = new google.maps.LatLngBounds(southwestCornerChicago, northeastCornerChicago);
  return cityBounds;
}


