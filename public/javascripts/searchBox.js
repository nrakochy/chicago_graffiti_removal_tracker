var initializeSearchBox = function initializeBox(){
  searchBox = createInputSearchBox();
  biasSearchBoxResults(searchBox);
}

function createInputSearchBox(){
  searchInput = (document.getElementById('box'));
  newBox = new google.maps.places.SearchBox(searchInput);
  google.maps.event.addListener(newBox, 'places_changed', function() {
      searchBox.getPlaces();
  });
  return newBox;
};

function biasSearchBoxResults(box){
  searchBounds = setCityBounds();
  box.setBounds(searchBounds);
}

function setCityBounds(){
  southwestCornerChicago = new google.maps.LatLng(41.6072, -87.8617);
  northeastCornerChicago = new google.maps.LatLng(42.106111, -87.471111);
  cityBounds = new google.maps.LatLngBounds(southwestCornerChicago, northeastCornerChicago);
  return cityBounds;
}


