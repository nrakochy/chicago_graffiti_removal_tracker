describe("mapJs", function(){
  describe("GoogleMapsMock", function(){
    var googleMap;

    beforeEach(function(){
      googleMap = GoogleMapsMock;
    });

    it("creates a googleMap", function() {
      expect(googleMap).not.toBe(undefined);
    })

  });
});




