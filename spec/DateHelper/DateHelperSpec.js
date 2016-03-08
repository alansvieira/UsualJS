describe("DateHelper", function() {
  var Helper = require('../../lib/DateHelper/DateHelper');
  var helper;

  beforeEach(function() {
    helper = new Helper();
  });

  it("should be a date when the is 02/02/1989", function() {
    
    var result = helper.isDate('02/12/1989');
    expect(result).toEqual(true);

  });
  
  it("should not be a date when the is 02/33/1989", function() {
    
    var result = helper.isDate('02/33/1989');
    expect(result).toEqual(false);

  });  
});
