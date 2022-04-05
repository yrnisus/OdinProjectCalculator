
let value = '';
let total = '';

// Button Listeners
const numButtons = document.querySelectorAll('#num').forEach(item => {
    // On click color store the value of the button
    item.addEventListener('mousedown', event => {
        value += '' + item.innerHTML;
        displayNum();
    })
})

const operatorBtns = document.querySelectorAll('#operator').forEach(item => {
    // On click color store the value of the button
    item.addEventListener('mousedown', event => {
        total = value;
        displayTotal();
        value = '';
        displayNum();
    })
})



const equalBtn = document.getElementById('equal');

// Click equal btn
equalBtn.addEventListener('mousedown', event => {
    console.log(value);
})

// Click clear btn
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('mousedown', event => {
    value = '';
    total = '';
    displayNum();
})


function displayNum() {
    document.getElementById('outputText').innerHTML = value;
}

function displayTotal() {
    document.getElementById('totalText').innerHTML = total;
}