var mapMarkers = [];
var baseMap;

var initializeMap = function(graffitiData){
  chicagoMap = drawChicagoMap();
  createMapMarkers(graffitiData, chicagoMap);
  setMapMarkers(mapMarkers, chicagoMap);
  baseMap = chicagoMap;
  return baseMap;
}

function drawChicagoMap(){
  chicagoCenterCoordinates = new google.maps.LatLng(41.8789, -87.6358);

  mapOptions = {
    center: chicagoCenterCoordinates,
    zoom: 11
  }
  newMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  return newMap;
}

function setMapMarkers(markers, map){
  $.each(markers, function setMap(index, marker){
    marker.setMap(map);
  });
}

function createMapMarkers(chicagoData, map){
  $.each(chicagoData, function addMarkersForEach(index, dataRecord){
    createMapMarker(map, dataRecord);
  });
};

function createMapMarker(map, dataRecord){
  myLatLng = new google.maps.LatLng(dataRecord['latitude'],dataRecord['longitude']);
  newMarkerLocationInformation = setLocationInformation(dataRecord);
  google.maps.InfoWindow.prototype.windowIsOpen = false;
  dataWindow = new google.maps.InfoWindow({
    content: ''
  })

  newMapMarker = new google.maps.Marker({
    position: myLatLng,
    clickable: true,
    icon: '../style/red-marker.png',
    map: null
  });

  bindInfoWindowData(map, newMapMarker, dataWindow, newMarkerLocationInformation);
  mapMarkers.push(newMapMarker);
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


