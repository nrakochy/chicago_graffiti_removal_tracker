var map;

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
     title: "FOO BAR"
   });
   return newMarker;
 };

 var addMapMarkers = function addMarkers(chicagoData, map){
   $.each(chicagoData, function(index, dataRecord){
      marker = createMapMarker(dataRecord);
      marker.setMap(map);
     });
     return map;
 };

