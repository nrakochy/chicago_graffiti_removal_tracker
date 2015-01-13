function searchUserInputAndPlaceMarkers(searchRequest, map, mapMarkers){
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({"address": searchRequest}, function(result, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var newLocation = result[0].geometry.location;
      setMapMarkers(map, mapMarkers);
      map.panTo(newLocation);
      map.setZoom(14);
    } else {
      setMapMarkers(map, mapMarkers);
      console.log('The call to Google api went wrong. Here is the reason: ' + status);
    };
  });
}

var filterSearchWithUserInput = function filterSearch(map, locationMarkers){
  var searchButton = $('[data-id=search]');
  searchButton.click(function( event ) {
    searchRequest = $('[data-name=search-bar]').val();
    searchUserInputAndPlaceMarkers(searchRequest, map, locationMarkers);
    linkToChicagoWebsite();
    resetSearchBar();
  });
}

function setMapMarkers(map, mapMarkers){
  $.each(mapMarkers, function setMap(index, marker){
    marker.setMap(map);
  });
}

function linkToChicagoWebsite() {
  var link = "<h1>You can make a new graffiti removal request on the <a href='http://311request.cityofchicago.org/reports/new?service_id=4fd3b167e750846744000005' target='_blank'>Chicago 311 website</a></h1>"
  var chicagoLink = $($.parseHTML(link))
  $('h1').replaceWith(chicagoLink);
  $('h3').replaceWith($(''));
}

function resetSearchBar(){
  $('[value]').val("");
}
