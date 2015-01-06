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
    it("should call the Google map constructor", function(){
      newMap = new drawChicagoMap();
      expect(newMap).toBeDefined();
    })
  });

});




