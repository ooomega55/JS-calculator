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

function copyButPress(){

}

function pasteButPress(){

}