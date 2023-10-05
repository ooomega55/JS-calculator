let prevVal = '';
let newVal = '';
let resultVal = '';
let mathOperator = '';

//store whether or not decimal or not was clicked
//(only allow one decimal per value)
let decimalClicked = false;

//Hold values we want stored in memory
let valMemStored = '';

function numButPress(num) {
    //check if a number has already been clicked
    if(resultVal){
        //start a new number
        newVal = num
        //reset to create new result
        resultVal = ''
    } else {
        //used to block multiple decimals
        if (num === '.'){
            if(decimalClicked != true){
                //take current value of newVal and add character pressed
                newVal += num
                //sets decimal check var to true, wont allow more than one
                decimalClicked = true
            }
        } else {
            newVal += num
            console.log(newVal);
        }
    }
    //update display
    document.getElementById('entry').value = newVal
}

function mathButPress(operator) {
    //Check if there was a previous calculation by seeing if resultVal has value
    //If result doesn't have a value, then store the current val as a previous for the next calculation
    if(!resultVal){
        prevVal = newVal
    } else {
        //if there is a current result, store that as previous value entered
        prevVal = resultVal
    }
    //restart to create new number
    newVal = ''
    //reset decimal
    decimalClicked = false
    //store operator
    mathOperator = operator
    //prepare entry for receiving new numbers
    resultVal = ''
    document.getElementById('entry').value = ''
}

function equalButPress(){
    decimalClicked = false
    //converting string numbers into float
    prevVal = parseFloat(prevVal)
    newVal = parseFloat(newVal)

    //perform calculations based on stored operator
    switch(mathOperator){
        case '+':
            resultVal = prevVal + newVal;
            break
        case '-':
            resultVal = prevVal - newVal;
            break
        case '*':
            resultVal = prevVal * newVal;
            break
        case '/':
            resultVal = prevVal / newVal;
            break
        //if equals is hit without operator, leave it
        default:
            resultVal = newVal;
    }
    //store current value as the previous so I can expect to next value in calculation
    prevVal = newVal
    //put calculation in entry window
    document.getElementById('entry').value = resultVal
}

//clears everything EXCEPT memory
function clearButPress(){
    prevVal = '';
    newVal = '';
    resultVal = '';
    mathOperator = '';
    decimalClicked = false;
    document.getElementById('entry').value = '0'
}

//store the current value in #entry in valMemStored
function copyButPress(){
    valMemStored = document.getElementById('entry').value
}

//if a value has been stored, paste it in the #entry window and assign it as the newVal
function pasteButPress(){
    if (valMemStored) {
        document.getElementById('entry').value = valMemStored
        newVal = valMemStored
    }
}