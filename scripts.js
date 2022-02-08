let display = null;
let firstNumber = null;
let secondNumber = null;
let result = undefined;
let operation = undefined;

const displayContainer = document.querySelector('.display-container');

const numberButtons = document.querySelectorAll('.number-buttons');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        if ( display === null || displayContainer.textContent == result) {
            display = value;
        } else {
            display += value;
        }
        displayContainer.textContent = display
    });
});

const operationButtons = document.querySelectorAll('.operation-buttons');
operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonOperation = button.id;
        let buttonSign = button.textContent;

        operation = buttonOperation;
        display += ` ${buttonSign} `;

        displayContainer.textContent = display;
    });
});

const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', () => {
    let separatedDisplay = display.split(' ');
    
    firstNumber = Number(separatedDisplay[0]);
    secondNumber = Number(separatedDisplay[2]);

    result = operate(operation, firstNumber, secondNumber);
    displayContainer.textContent = result;
})


function add(a,b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

function operate(operation, a, b) {
    if ( operation === 'add') {
        return add(a, b);
    } else if (operation === 'substract') {
        return substract(a, b);
    } else if (operation === 'multiply') {
        return multiply(a, b);
    } else if (operation === 'divide') {
        return divide(a, b);
    };
};