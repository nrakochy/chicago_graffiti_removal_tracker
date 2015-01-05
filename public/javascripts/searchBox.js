var searchBox;

var initializeSearchBox = function initializeBox(map){
  createInputSearchBox();
  biasSearchBoxResults();
  filterSearch(map);
}

function createInputSearchBox(){
  searchInput = (document.getElementById('box'));
  searchBox = new google.maps.places.Autocomplete(searchInput);
};

function biasSearchBoxResults(){
  searchBounds = setCityBounds();
  searchBox.setBounds(searchBounds);
}

function setCityBounds(){
  southwestCornerChicago = new google.maps.LatLng(41.6072, -87.8617);
  northeastCornerChicago = new google.maps.LatLng(42.106111, -87.471111);
  cityBounds = new google.maps.LatLngBounds(southwestCornerChicago, northeastCornerChicago);
  return cityBounds;
}


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

function filterSearch(map){
  searchButton = $('[data-id=search]');
  searchButton.click(function( event ) {
    searchRequest = $('[data-name=search-bar]').val();
    convertUserInputAndSearch(searchRequest, map);
  });
}
