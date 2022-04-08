
let value = 0;
let valueString = '';
let total = 0;
let totalString = '';
let firstOperator = true;
let prevOperator = '';
let newOperator = '';
let equalPressed = false;

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
        equalPressed = false;
        showOperator();
        //do math first
        operate(newOperator);
        firstOperator = false;
    })

})

// Click equal btn
const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('mousedown', event => {
    newOperator = equalBtn.innerHTML;
    equalPressed = true;
    operate(newOperator);
    // This should be fine
    document.getElementById('outputText').innerHTML = total;
    document.getElementById('totalText').innerHTML = "";
    hideOperator();
})

// Click clear btn
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('mousedown', event => {
    clearVariables();
    displayBoth();
})

// Click undo button
const undoBtn = document.getElementById('undo');
undoBtn.addEventListener('mousedown', event => {
    if (prevOperator !== '=') {
        valueString = valueString.slice(0, valueString.length - 1);
    }
    if (prevOperator == '=' && firstOperator == true) {
        valueString = valueString.slice(0, valueString.length - 1);
    }
    displayNum();
})

// click decimal button
const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('mousedown', event => {
    if (!valueString.includes('.')) {
        console.log('false');
        valueString = valueString.concat('.');
        displayNum();
    }
})


// Click percent button
const percentBtn = document.getElementById('percent');
percentBtn.addEventListener('mousedown', event => {
    newOperator = percentBtn.innerHTML;
    getPercent();
})

// converts to percentage
function getPercent() {
    if (totalString == '') {
        total = valueString * .01;
        // console.log(`Total ${total}`);
        // console.log(`value ${value}`);
        firstOperator = !firstOperator;
        totalString = String(total);
        valueString = '';
    }
    else {
        valueString *= .01;
        value = valueString * .01;
    }
    displayBoth();

}

// perform math operations after operatorBtn event listener onclick
// User sends a value which is to be used with previous operator
//  On first input the previous operator is 0 + input
function operate(newOperator) {
    value = parseFloat(valueString, 10);
    // If prev and new are both = then operator button wasnt pressed
    // clear the variables
    if(equalPressed && prevOperator == '=') {
        totalString = valueString;
        total = parseFloat(totalString);
        value = 0;
        valueString = '';
        console.log('test');
        displayBoth();
        return;
    }

    // First time an operator is used total = value;
    if (firstOperator) {
        total = value;
    }

    //User spams the same operator button
    if(prevOperator === newOperator && firstOperator !== true) {
        return;
    }
     //After the first operator
    if (totalString !== '') {
        if (prevOperator !== '%')
            total = parseFloat(totalString, 1);

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
                if (value !== 0)
                    total /= value;
                else if (value == 0) {
                    alert("Why would you even try that");
                    total = 0;
                }
                break;
            case '=':
                console.log(total);
                break;
            case '%':
                total *= value;
                // console.log(`Total ${total}`);
                // console.log(`value ${value}`);
                break;
            default:
                console.log("error");
                break;
        }
    }
    totalString = String(total);
    if (totalString.includes('.'))
        total = parseFloat(total.toFixed(4));
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


// Keyboard support
document.addEventListener('keydown', (event) => {
    let key = event.key;
    let code = event.code;
    // // Alert the key name and key code on keydown
    // console.log(`Key pressed ${key} \r\n Key code value: ${code}`);
    checkIfNum(key);
    displayNum();
}, false);

function checkIfNum(key) {
    if (Number.isInteger(parseInt(key))) {
        valueString += key;
    }
}

function checkIfOperator(key) {
    const operatorList = ['+', '-', '*', '/',];

    if (Number.isInteger(parseInt(key))) {
        valueString += key;
    }
}

function showOperator() {
    document.getElementById('operatorText').innerHTML = newOperator;
}

function hideOperator() {
    document.getElementById('operatorText').innerHTML = '';
}