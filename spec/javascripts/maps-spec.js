describe("mapJs", function(){
  var googleMap;

  beforeEach(function(){
    googleMap = GoogleMapsMock;
  });

  describe("GoogleMapsMock helper is wired up to the spec", function(){
    it("creates a googleMap", function() {
      expect(googleMap).not.toBe(undefined);
    })
  });

  describe("drawChicagoMap", function(){
    it("drawsChicagoMap", function() {
      var map = googleMap(){ google.maps.LatLng };
      var originalConstructor = map, mapSpy;
      spyOn(window, map).and.callFake(function() {
        mapSpy = new originalConstructor();
        spyOn(mapSpy, 'chicagoCenterCoordinates');
        return mapSpy;
      });
      drawChicagoMap();
      expect(mapSpy.chicagoCenterCoordinates).toHaveBeenCalled();
    });
  });

  describe("createMapMarker", function(){
    it("should call the Google map constructor", function(){
    });
  });

});




