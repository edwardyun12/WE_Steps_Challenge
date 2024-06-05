/** Task 1 - declare a numeric value */
 function decNumeric() {
    //declare var called numVar below 
    
    //set its value to 22
    
    //do not alter
    return numVar;
  }
  

  /** Task 2 - declare a string value */
  function decString() {
    //declare var called strVar below 
    
    //set its value to 'Step Challenges!'
    
    //do not alter
    return strVar;
  }
  
  /** Task 3 - declare a boolean value */
  function decBoolean() {
    //declare var called booVar below 
    
    //set its value to true
   
    //do not alter
    return booVar;
  }
  
  /** Task 4 - take two values and multiply them and return the value */
  function arithmeticOp(valA, valB) {
    //var to hold return value
    
    // write code to multiply valA and valB and assign the value to retVal
    
    //do not alter
    return retVal;
  }
  
  /** Task 5 -  take two strings, concatenate them and return the resulting string */
  function stringOp(strA, strB) {
    //var to hold return value
    
    // write code to concatenate strA and strB with a space in between and assign the value to retStr
    
    //do not alter
    return retStr;
  }
  
  /** Task 6 - take two values and check if A is less than B and return boolean result (true if A less than B) */
  function compOp(valA, valB) {
    //var to hold return value
    
    // write code to test if valA is less than valB and assign the boolean value to retVal
    
    //do not alter
    return retVal;
  }
  
  /** Task 7 -  take four values and do various comparison operations and return the result */
  function logicOp(valA, valB, valC, valD) {
    //var to hold return value
    
    // write code to test if (valA is less than valB) AND (valC is equal to valD) and assign the value to retVal
    
    //do not alter
    return retVal;
  }
  
  /** Task 8 -  take a string and convert it to a number (any number) */
  function changeStrToNumber(strToConvert) {
    //write the code to convert strToConvert to a number (e.g. 5)
    
    //do not alter
    return strToConvert;
  }

/** Task 9 - take in single values and return them as an array */
function returnArray(var1, var2, var3, var4) {
    //write code to put the passed values into an array called retArray
    
    //do not alter
    return retArray;
    }
      
  
  /** Bonus Task 10 take two strings and cast them to numbers then add them and return the result */
  function castStrToNumber(strValue1, strValue2) {
    //var to hold return value
    
    //write code to convert both input values to numbers
    
    //write code to add the values and put the result into retVal
    
    //do not alter
    return retVal;
  }
  
  /** Bonus Task 11 - takes in an array and returns a copy of the array with the last element removed */
  function arrayPop(arrToPop) {
    //write code to copy the passed array, remove the last element from the new array and to then return the shortened array
    
    //do not alter
    return retArray;
  }

  /** Bonus Task 12 Challenge -
 * write code in this function that takes the salary 
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
    
    //arrReturn needs declaring and populating
    return arrReturn;
  }
  
  module.exports = { decNumeric, decString, decBoolean, arithmeticOp, stringOp, compOp, logicOp, changeStrToNumber, castStrToNumber, returnArray, arrayPop, workoutTax001};