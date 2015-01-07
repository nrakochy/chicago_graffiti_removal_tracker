var initializeSearchBox = function initializeBox(){
  var searchBox = createInputSearchBox();
  biasSearchBoxResults(searchBox);
}

function createInputSearchBox(){
  var searchInput = (document.getElementById('box'));
  var newBox = new google.maps.places.SearchBox(searchInput);
  google.maps.event.addListener(newBox, 'places_changed', function() {
      searchBox.getPlaces();
  });
  return newBox;
};

function biasSearchBoxResults(box){
  var searchBounds = setCityBounds();
  box.setBounds(searchBounds);
}

function setCityBounds(){
  var southwestCornerChicago = new google.maps.LatLng(41.6072, -87.8617);
  var northeastCornerChicago = new google.maps.LatLng(42.106111, -87.471111);
  var cityBounds = new google.maps.LatLngBounds(southwestCornerChicago, northeastCornerChicago);
  return cityBounds;
}


