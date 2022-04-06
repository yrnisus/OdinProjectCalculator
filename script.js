
let value = 0;
let valueString = '';
let total = 0;
let totalString = '';
let firstOperator = true;

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
        let operator = item.innerHTML;
        //do math first
        operate(operator);
        displaytotalString();
        valueString = '';
        displayNum();
        firstOperator = false;
    })

})

// perform operations
function operate(operator) {
    if (totalString !== '')
        total = parseInt(totalString, 10);
    value = parseInt(valueString, 10);

    switch (operator) {
        case '+':
            console.log('plus');
            total += value;
            console.log(total);
            break;
        case '-':
            console.log('subtract');
            if (firstOperator) {
                total = value;
                break
            }
            total -= value;
            break;
        case '×':
            console.log('x');
            if (firstOperator) {
                total = value;
                break
            }
            total *= value;
            break;
        case '÷':
            console.log('/');
            if (firstOperator) {
                total = value;
                break
            }
            total /= value;
            break;
    }

    totalString = String(total);

}



const equalBtn = document.getElementById('equal');

// Click equal btn
equalBtn.addEventListener('mousedown', event => {
    console.log(valueString);
})

// Click clear btn
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('mousedown', event => {
    valueString = '';
    totalString = '';
    total = 0;
    value = 0;
    firstOperator = true;
    displayNum();
    displaytotalString();
})





// display functions

function displayNum() {
    document.getElementById('outputText').innerHTML = valueString;
}

function displaytotalString() {
    document.getElementById('totalText').innerHTML = totalString;
}
