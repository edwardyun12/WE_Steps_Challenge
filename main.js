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
}

// Test case 2 - Return False if one of the responses contains empty string or valid number or strings
function validateResponse(responses) {
    // Your code goes here!
    for (const element of Object.values(responses)) {
        if (element == "") {
            return false;
        }
    }
    if ((parseInt(responses.stepCount)) === "NaN") {
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

    rowHeader.setAttribute("scope","row");
    rowHeader.innerHTML = index;
    firstNameCell.innerHTML = responses.firstName;
    lastNameCell.innerHTML = responses.lastName;
    stepCell.innerHTML = responses.stepCount;
    badgeCell.innerHTML = 'Insert Badge Here';

    tableRow.append(rowHeader, firstNameCell, lastNameCell, stepCell, badgeCell);
    resultTable.append(tableRow);
    index++;
}