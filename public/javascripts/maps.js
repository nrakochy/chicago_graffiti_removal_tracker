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
   var newMarker = new google.maps.Marker({
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

 var sampleDataRecord =
   [{
     "police_district" : "12",
     "zip_code" : "60608",
     "location" : {
       "needs_recoding" : false,
       "longitude" : "-87.67355391908644",
       "latitude" : "41.85282566369766"
     },
     "status" : "Open",
     "where_is_the_graffiti_located_" : "Side",
     "service_request_number" : "14-02155523",
     "x_coordinate" : "1164037.50683076",
     "creation_date" : "2014-12-17T00:00:00",
     "what_type_of_surface_is_the_graffiti_on_" : "Wood - Painted",
     "ward" : "25",
     "y_coordinate" : "1889720.71130794",
     "longitude" : "-87.67355391908644",
     "community_area" : "31",
     "type_of_service_request" : "Graffiti Removal",
     "latitude" : "41.85282566369766",
     "street_address" : "2140 S WOLCOTT AVE"
   }];

