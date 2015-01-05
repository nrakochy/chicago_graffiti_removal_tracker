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
  });
}
