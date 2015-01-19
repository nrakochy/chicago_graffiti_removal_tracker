var filterSearchWithUserInputAndLinkToChicagoWebsite = function filterSearch(map, locationMarkers, searchRequest){
  $('[id=searchForm]').submit(function (event){
    event.preventDefault();
    searchRequest = $('[data-name=search-bar]').val();
    centerMapOnUserInput(searchRequest, map);
    linkToChicagoWebsite();
    resetSearchBar();
    setMapMarkers(map, locationMarkers);
  });
}

function centerMapOnUserInput(searchRequest, map){
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({"address": searchRequest}, function(result, status) {
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

