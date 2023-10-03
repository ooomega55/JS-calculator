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