var initializeMap = function(){
  return drawChicagoMap();
}

function drawChicagoMap(){
  var chicagoCenterCoordinates = new google.maps.LatLng(41.8789, -87.6358);
  var mapOptions = {
    center: chicagoCenterCoordinates,
    zoom: 11
  }
  var newMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  return newMap;
}

