describe("Date  functions", function() {
  var Usual = require('../../src/usualjs/Usual');
  var helper;

  beforeEach(function() {
    helper = new Usual();
  });

  it("should be a date when the is 02/02/1989", function() {
    
    var result = helper.isDate('02/12/1989');
    expect(result).toEqual(true);
	
	console.log("should be a date when the is 02/02/1989 passed");

  });
  
  it("should not be a date when the is 02/33/1989", function() {
    
    var result = helper.isDate('02/33/1989');
    expect(result).toEqual(false);

  });  
});
