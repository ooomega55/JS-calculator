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

}

function equalButPress(){

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