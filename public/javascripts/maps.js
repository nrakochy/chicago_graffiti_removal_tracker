var drawChicagoMap = function drawMap(){
  chicagoCoordinates = new google.maps.LatLng(41.8789, -87.6358);
  mapOptions = {
    zoom: 12,
    center: chicagoCoordinates
  }
  return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

var createMapMarker = function createMarker(dataRecord){
  markerLatLng = new google.maps.LatLng(dataRecord['latitude'],dataRecord['longitude']);
  newMarker = new google.maps.Marker({
    position: markerLatLng,
    title: dataRecord['street_address'],
    clickable: true
  });
  return newMarker;
};

var createInfoWindow = function createWindow(map, marker){
  dataWindow = new google.maps.InfoWindow({
    content: "Hello"
  });
  google.maps.event.addListener(marker, 'click', function() {
    dataWindow.open(map,marker);
  });
}

var addMapMarkers = function addMarkers(chicagoData, map){
  $.each(chicagoData, function(index, dataRecord){
    marker = createMapMarker(dataRecord);
    marker.setMap(map);
    createInfoWindow(map, marker);
  });
  return map;
};

/*
Sample infoWindow Content String from Google
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
*/

