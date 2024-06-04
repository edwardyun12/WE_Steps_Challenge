const { decNumeric, decString, decBoolean, arithmeticOp, stringOp, compOp, logicOp, changeStrToNumber, castStrToNumber, returnArray, arrayPop , workoutTax001} = require("./unit-test");
const assert = require('assert');

describe("Unit test challenge!", function () {
  it( "Task 1 - Declare a numeric variable", function() {
    assert.equal(decNumeric(), 22 );
  }),

  it( "Task 2 - Declare a string variable", function() {
    assert.equal(decString(), 'Step Challenges!');
    }),

  it( "Task 3 - Declare a boolean variable", function() {
    assert.equal( decBoolean(), true );
  }),

  it( "Task 4 - Test Arithmetic operator - mulitply", function() {
    assert.equal( arithmeticOp(20, 10), 200 );
  }),

  it( "Task 5 - Concate string variables", function() {
    assert.equal(stringOp('JavaScript', 'Rocks!'), "JavaScript Rocks!" );
    }),

  it( "Task 6 - Comparison operator - less than true", function() {
    assert.equal(compOp(23, 24), true );
    });

  it(" Task 7 - Comparison operator - less than false", function() {
    assert.equal(compOp(25, 24), false );
    });
  
  it( "Task 8 - Logical operator - && false", function() {
    assert.equal(logicOp(12, 30, 11, 11), true );
    });

  it( "Task 9 - Logical operator - && false", function() {
    assert.equal(logicOp(12, 30, 10, 11), false );
    });
  it( "Task 10 - Change string var to a number", function() {
    assert.equal(typeof(changeStrToNumber("Five")), "number");
  });
  it( "Task 11 - Cast string vars to numbers", function() {
    assert.equal(castStrToNumber("5","2.2"), 7.2);
    assert.equal(castStrToNumber("7","3"), 10);
  });
  it("Task 11 - Test returnArray function", function() {
    var arrTest1 = [5,4,5,4];
    var arrTest2 = ["one", "two", "three", "four"];
    assert.equal(JSON.stringify(returnArray(5,4,5,4)), JSON.stringify(arrTest1));
    assert.equal(JSON.stringify(returnArray("one", "two", "three", "four")), JSON.stringify(arrTest2));
    });
  it("Task 12 - Test arrayPop function", function() {
  var arrToPop1 = [5,4,5,4];
  var arrTest1 = [5,4,5];
  var arrToPop2 = ["one", "two", "three", "four"];
  var arrTest2 = ["one", "two", "three"];
  assert.equal(JSON.stringify(arrayPop(arrToPop1)), JSON.stringify(arrTest1));
  assert.equal(JSON.stringify(arrayPop(arrToPop2)), JSON.stringify(arrTest2));
  });
  // test the workoutTax001 function.
  it('Task 13 - Test workoutTax001 function', function() {
  // test values 1
  let arrSalary = workoutTax001(30000); 
  assert.equal(arrSalary[0], 9000, "Tax value < 45000  correct");
  assert.equal(arrSalary[1], 21000, "Net salary value < 45000 correct");
  // test values 2
  arrSalary = workoutTax001(45000); 
  assert.equal(arrSalary[0], 13500, "Tax value > 45000 correct");
  assert.equal(arrSalary[1], 31500, "Net salary value > 45000 correct");
});
}) 

 