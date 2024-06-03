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
    let firstName = responses[0];
    let lastName = responses[1];
    let stepCount = responses[2];
    let resultTable = document.getElementById('sampleTable');

    let tableRow = document.createElement('tr'),
        rowHeader = document.createElement('th'),
        firstNameCell = document.createElement('td'),
        lastNameCell = document.createElement('td'),
        stepCell = document.createElement('td'),
        badgeCell = document.createElement('td');

    rowHeader.setAttribute("scope","row");
    rowHeader.innerHTML = index;
    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    stepCell.innerHTML = stepCount;
    
    let badges = addBadges(stepCount);

    for (let i = 0; i < badges.length; i++){
        badgeCell.appendChild(badges[i]);
    }

    tableRow.append(rowHeader, firstNameCell, lastNameCell, stepCell, badgeCell);
    resultTable.append(tableRow);
    index++;
}

function addBadges(stepCount) {
    let result = [];

    if (stepCount > 2500){
        badgeSpan = document.createElement('span');
        badgeSpan.className = "badge text-bg-bronze";
        badgeSpan.innerHTML = "Bronze";
        result.push(badgeSpan);
    } if (stepCount > 5000) {
        badgeSpan = document.createElement('span');
        badgeSpan.className = "badge text-bg-silver";
        badgeSpan.innerHTML = "Silver";
        result.push(badgeSpan);
    } if (stepCount > 10000) {
        badgeSpan = document.createElement('span');
        badgeSpan.className = "badge text-bg-gold";
        badgeSpan.innerHTML = "Gold";
        result.push(badgeSpan);
    }if (stepCount > 12000) {
        badgeSpan = document.createElement('span');
        badgeSpan.className = "badge text-bg-platinum";
        badgeSpan.innerHTML = "Platinum";
        result.push(badgeSpan);
    }

    return result;
}