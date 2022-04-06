
let value = 0;
let valueString = '';
let total = 0;
let totalString = '';
let firstOperator = true;
let prevOperator = '';
let newOperator = '';

// Button Listeners
const numButtons = document.querySelectorAll('#num').forEach(item => {
    // On click store the valueString of the button
    item.addEventListener('mousedown', event => {
        valueString += '' + item.innerHTML;
        displayNum();
    })
})

// Operator button listeners
const operatorBtns = document.querySelectorAll('#operator').forEach(item => {
    // On click store the valueString of the button
    item.addEventListener('mousedown', event => {
        newOperator = item.innerHTML;
        //do math first
        operate(newOperator);
        firstOperator = false;
    })

})

// Click equal btn
const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('mousedown', event => {
    newOperator = equalBtn.innerHTML;
    operate(newOperator);
    document.getElementById('outputText').innerHTML = total;
    document.getElementById('totalText').innerHTML = "";
})

// Click clear btn
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('mousedown', event => {
    clearVariables();
    displayBoth();
})



// perform math operations after operatorBtn event listener onclick
// User sends a value which is to be used with previous operator
//  On first input the previous operator is 0 + input
function operate(newOperator) {
    value = parseInt(valueString, 10);
    // First time an operator is used total = value;
    if (firstOperator) {
        total = value;
    }

    //After the first operator
    if (totalString !== '') {
        total = parseInt(totalString, 10);

        switch (prevOperator) {
            case '+':
                console.log('plus');
                total += value;
                console.log(total);
                break;
            case '-':
                console.log('subtract');
                total -= value;
                break;
            case '×':
                console.log('x');
                total *= value;
                break;
            case '÷':
                console.log('/');
                if(value !== 0)
                total /= value;
                else if(value == 0) {
                alert("Why would you even try that");
                total = 0;
                }
                break;
            case '=':
                console.log(total);
                break;
            default:
                console.log("error");
                break;
        }
    }

    totalString = String(total);
    valueString = '';
    displayBoth();
    prevOperator = newOperator;
}

function clearVariables() {
    valueString = '';
    totalString = '';
    total = 0;
    value = 0;
    firstOperator = true;
}



// display functions

function displayBoth() {
    document.getElementById('outputText').innerHTML = valueString;
    document.getElementById('totalText').innerHTML = totalString;
}

function displayNum() {
    document.getElementById('outputText').innerHTML = valueString;
}

function displaytotalString() {
    document.getElementById('totalText').innerHTML = totalString;
}
