var drawChicagoMap = function drawMap(){
    chicagoCoordinates = new google.maps.LatLng(41.8369, -87.6847);
     mapOptions = {
       zoom: 10,
       center: chicagoCoordinates
     }
     baseMap = new google.maps.Map($('.map-canvas'), mapOptions);
     return baseMap;
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

