var index = 3;

// Rebuild the list everytime at the end of the submit action.

// Test case 1 - Fill out the response to collect the correct information
function submitResponse() {
    // Your code goes here!
    // Change Array to Object for easy reference.
    var responses = { firstName : document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    stepCount: document.getElementById('stepCount').value }
    if(validateResponse(responses)) {
        addLeaderBoard(responses);
    } else {
        // Use Toast instead of Window.alert
        window.alert("Missing/Invalid Field!");
    }
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("stepCount").value = "";
}

// Test case 2 - Return False if one of the responses contains empty string or valid number or strings
function validateResponse(responses) {
    // Challenge is to create a for loop to check if the responses field is empty.
    for (const element of Object.values(responses)) {
        if (element == "") {
            return false;
        }
    }
    // Checking if the parsed value of stepCount is NaN (Not a Number!)
    if (isNaN(parseInt(responses.stepCount))) {
        return false;
    }
    return true;
}

// Test case 3 - Add player to the Leaderboard
function addLeaderBoard(responses) {
    let resultTable = document.getElementById('sampleTable');

    let tableRow = document.createElement('tr'),
        rowHeader = document.createElement('th'),
        firstNameCell = document.createElement('td'),
        lastNameCell = document.createElement('td'),
        stepCell = document.createElement('td'),
        badgeCell = document.createElement('td');

    tableRow.setAttribute("class","item")
    rowHeader.setAttribute("scope","row");
    rowHeader.innerHTML = index;
    firstNameCell.innerHTML = responses.firstName;
    lastNameCell.innerHTML = responses.lastName;
    stepCell.innerHTML = responses.stepCount;
    
    let badges = addBadges(responses.stepCount);
    badgeCell.appendChild(badges);
    
    tableRow.append(rowHeader, firstNameCell, lastNameCell, stepCell, badgeCell);
    resultTable.append(tableRow);
    index++;
}

function hi() {
    // this function gets data from the rows and cells 
// within an html tbody element
function table2data(tableBody){
    const tableData = []; // create the array that'll hold the data rows
    tableBody.querySelectorAll('tr')
      .forEach(row=>{  // for each table row...
        const rowData = [];  // make an array for that row
        row.querySelectorAll('td')  // for each cell in that row
          .forEach(cell=>{
            rowData.push(cell.innerText);  // add it to the row data
          })
        tableData.push(rowData);  // add the full row to the table data 
      });
    return tableData;
  }
  
  // this function puts data into an html tbody element
  function data2table(tableBody, tableData){
    tableBody.querySelectorAll('tr') // for each table row...
      .forEach((row, i)=>{  
        const rowData = tableData[i]; // get the array for the row data
        row.querySelectorAll('td')  // for each table cell ...
          .forEach((cell, j)=>{
            cell.innerText = rowData[j]; // put the appropriate array element into the cell
          })
      });
  }
  }

function addBadges(stepCount) {
    let result;
    if (stepCount < 2500){
        result = document.createElement('span');
    }if (stepCount >= 2500 && stepCount < 5000){
        result = createBronzeBadge();
    } if (stepCount >= 5000 && stepCount < 10000) {
        result = createSilverBadge();
    } if (stepCount >= 10000 && stepCount < 12000) {
        result = createGoldBadge();
    }if (stepCount >= 12000) {
        result = createPlatinumBadge();
    }

    return result;
}

module.exports = {addBadges}

function createBronzeBadge(){
    let badgeSpan = document.createElement('span');
        badgeSpan.className = "badge text-bg-bronze";
        badgeSpan.innerHTML = "Bronze";
        return badgeSpan
}

function createSilverBadge(){
    let badgeSpan = document.createElement('span');
        badgeSpan.className = "badge text-bg-silver";
        badgeSpan.innerHTML = "Silver";
        return badgeSpan
}

function createGoldBadge(){
    let badgeSpan = document.createElement('span');
        badgeSpan.className = "badge text-bg-gold";
        badgeSpan.innerHTML = "Gold";
        return badgeSpan
}

function createPlatinumBadge(){
    let badgeSpan = document.createElement('span');
        badgeSpan.className = "badge text-bg-platinum";
        badgeSpan.innerHTML = "Platinum";
        return badgeSpan
}