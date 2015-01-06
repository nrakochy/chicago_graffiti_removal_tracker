describe("mapJs", function(){
  var googleMap;
  beforeEach(function (){
    googleMap = createSpyObject('maps',[])
  });

  it("drawChicagoMap", function() {
    expect(drawChicagoMap()).toReturn(googleMap);
  })
});




