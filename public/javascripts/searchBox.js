var initializeSearchBox = function initializeBox(){
  searchBox = createInputSearchBox();
  biasSearchBoxResults(searchBox);
}

function createInputSearchBox(){
  searchInput = (document.getElementById('box'));
  return new google.maps.places.Autocomplete(searchInput);
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


