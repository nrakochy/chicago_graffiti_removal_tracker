var filterSearchWithUserInputAndLinkToChicagoWebsite = function filterSearch(map, locationMarkers, searchRequest){
  $('[id=searchForm]').submit(function (event){
    event.preventDefault();
    var request = $('[data-name=search-bar]').val();
    var searchRequest = appendChicagoLocationToUserInput(request);
    centerMapOnUserInput(searchRequest, map);
    linkToChicagoWebsite();
    setMapMarkers(map, locationMarkers);
  });
}

function centerMapOnUserInput(searchInput, map){
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({"address": searchInput}, function(result, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var newLocation = result[0].geometry.location;
      map.setZoom(14);
      map.panTo(newLocation);
    } else {
      map.setZoom(14);
      console.log('The call to Google api went wrong. Here is the reason: ' + status);
    };
  });
}

function setMapMarkers(map, mapMarkers){
  google.maps.event.addListener(map, 'idle', function(){
    $.each(mapMarkers, function setMap(index, marker){
      marker.setMap(map);
    });
    resetSearchBar();
  })
}

function linkToChicagoWebsite() {
  var link = "<h2>You can make a new graffiti removal request on the <a href='http://311request.cityofchicago.org/reports/new?service_id=4fd3b167e750846744000005' target='_blank'>Chicago 311 website</a></h2>"
  var chicagoLink = $($.parseHTML(link))
  $('h1').replaceWith(chicagoLink);
}

function resetSearchBar(){
  $('[value]').val("");
}

function appendChicagoLocationToUserInput(input){
  var matches = input.match(/Chicago, IL/i);
  if(matches === null){
    return (input + "Chicago, IL")
  } else {
    return input;
  }
}

