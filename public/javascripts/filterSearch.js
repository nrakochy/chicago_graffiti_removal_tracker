function convertUserInputAndSearch(searchRequest, map){
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({"address": searchRequest}, function(result, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      newLocation = result[0].geometry.location;
      map.panTo(newLocation);
      map.setZoom(14);
    } else {
      console.log('The call to Google api went wrong. Here is the reason: ' + status);
    };
  });
}

var filterSearchWithUserInput = function filterSearch(map){
  searchButton = $('[data-id=search]');
  searchButton.click(function( event ) {
    searchRequest = $('[data-name=search-bar]').val();
    convertUserInputAndSearch(searchRequest, map);
    linkToChicagoWebsite();
    $('[value]').val("");
  });
}

function linkToChicagoWebsite() {
  chicagoLink =
    $('<h3>You can make a new graffiti removal request on the <a href="http://311request.cityofchicago.org/reports/new?service_id=4fd3b167e750846744000005" target="_blank">Chicago 311 website</a></h3>')
  $('h3').replaceWith(chicagoLink);
}
