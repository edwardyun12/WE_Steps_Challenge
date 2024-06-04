/** @function decNumeric() - declare a numeric value */
function decNumeric() {
    //declare var called numVar below 
    var numVar; 
    //set its value to 22
    numVar = 22;
    //do not alter
    return numVar;
  }
  
  /** @function decString() - declare a string value */
  function decString() {
    //declare var called strVar below 
    var strVar;
    //set its value to 'Hello APP!'
    strVar = 'Hello APP!';
    //do not alter
    return strVar;
  }
  
  /** @function decBoolean() - declare a boolean value */
  function decBoolean() {
    //declare var called booVar below 
    var booVar;
    //set its value to true
    booVar = true;
    //do not alter
    return booVar;
  }
  
  /** @function arithmeticOp() -  take two values and multiply them and return the value */
  function arithmeticOp(valA, valB) {
    //var to hold return value
    var retVal;
    // write code to multiply valA and valB and assign the value to retVal
    retVal = valA * valB;
    //do not alter
    return retVal;
  }
  
  /** @function stringOp() -  take two strings, concatenate them and return the resulting string */
  function stringOp(strA, strB) {
    //var to hold return value
    var retStr;
    // write code to concatenate strA and strB with a space in between and assign the value to retStr
    retStr = strA + " " + strB;
    //do not alter
    return retStr;
  }
  
  /** @function compOP() - take two values and check if A is less than B and return boolean result (true if A less than B) */
  function compOp(valA, valB) {
    //var to hold return value
    var retVal;
    // write code to test if valA is less than valB and assign the boolean value to retVal
    retVal = false;
    if (valA < valB) {
      retVal = true;
    }
    //do not alter
    return retVal;
  }
  
  /** @function logicOp() -  take four values and do various comparison operations and return the result */
  function logicOp(valA, valB, valC, valD) {
    //var to hold return value
  
    // write code to test if (valA is less than valB) AND (valC is equal to valD) and assign the value to retVal
    retVal = false;
    if ((valA < valB) && (valC == valD)){
      retVal = true;
    }
    //do not alter
    return retVal;
  }
  
  /** @function changeStrToNumber() -  take a string and convert it to a number (any number) */
  function changeStrToNumber(strToConvert) {
    //write the code to convert strToConvert to a number (e.g. 5)
    strToConvert = parseInt(strToConvert, 10)
    //do not alter
    return strToConvert;
  }
  //convertStrToNumber("Hello World!");
  
  /** @function castStrToNumber() take two strings and cast them to numbers then add them and return the result */
  function castStrToNumber(strValue1, strValue2) {
    //var to hold return value
    var retVal;
    //write code to convert both input values to numbers
    number1 = Number(strValue1);
    number2 = Number(strValue2);
    //write code to add the values and put the result into retVal
    retVal = number1 + number2;
    //do not alter
    return retVal;
  }
  
  /** @function returnArray() - take in single values and return them as an array */
  function returnArray(var1, var2, var3, var4) {
    //write code to put the passed values into an array called retArray
    let retArray = [var1, var2, var3, var4];
    //do not alter
    return retArray;
  }
  
  
  /** @function arrayPop() -  takes in an array and returns a copy of the array with the last element removed */
  function arrayPop(arrToPop) {
    //write code to copy the passed array, remove the last element from the new array and to then return the shortened array
    var retArray = arrToPop;
    retArray.pop();
    //do not alter
    return retArray;
  }

  /** @function workoutTax001() - write code in this function that takes the salary 
 * amount as a parameter, and calculates the tax payable at a rate of 30%. If 
 * the salary is over £45000 add an extra £5000 to the tax. Subtract the tax from 
 * the original salary to get the net salary amount. The function should return an 
 * array containing the total amount of tax at index 0 and the net salary at index 1.
 * @param	{number}   numSalary 	amount of salary as a number
 * @return	{number[]} array containing the total amount of tax at index 0 and 
 * 						the net salary at index 1.
*/
function workoutTax001(numSalary) {

    //write your code here
    let arrReturn = [];
    let tax = numSalary * 30/100;
    let netSalary;
    let totalTax;
  
    if (numSalary > 45000) {
      netSalary = numSalary - tax - 5000;
      totalTax = tax + 5000; 
    } else {
      netSalary = numSalary - tax;
      totalTax = tax;
    }
    arrReturn = [totalTax, netSalary];
    //arrReturn needs declaring and populating
    return arrReturn;
  }
  
  