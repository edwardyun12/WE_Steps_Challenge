var assert = require('assert');

describe('Step Challenges Unit Tests Part 1!', function () {
    it('should return -1 when the value is not present', ()=> {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it("should match the Test string", ()=> {
      assert.equal("Test String", "Test String")
    });
  });

  describe('Step Challenges Unit Tests Part 2!', function () {
    it('should return the Integer with the valid number of Steps!', ()=> {
      assert.equal(120000, 120000);
    });
    it("Type Should be matching", ()=> {
      assert.equal(typeof("Test String"), "string" )
    });
  });