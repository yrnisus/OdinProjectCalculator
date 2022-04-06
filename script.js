
let value = 0;
let valueString = '';
let total = 0;
let totalString = '';
let firstOperator = true;
let operator = '';
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
        operate(currentOperator);
        firstOperator = false;
    })

})

// perform math operations
function operate(newOperator) {
    value = parseInt(valueString, 10);
    // First time an operator is used total = value;
    if (firstOperator) {
        total = value;
    }


    //After the first operator
    if (totalString !== '') {
        total = parseInt(totalString, 10);

        // value = parseInt(valueString, 10);

        switch (operator) {
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
                total /= value;
                break;
            // case '=':
            //     console.log('=');
            //     break;
            default:
                console.log("error");
                break;
        }
    }

    totalString = String(total);
    valueString = '';
    displayBoth();
}



const equalBtn = document.getElementById('equal');

// Click equal btn
equalBtn.addEventListener('mousedown', event => {
    operate(operator);
})

// Click clear btn
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('mousedown', event => {
    clearVariables();
    displayBoth();
})

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
