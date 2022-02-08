let displayedNumber = null;
let firstNumber = null;
let secondNumber = null;
let operation = undefined;

const displayContainer = document.querySelector('.display-container');

const numberButtons = document.querySelectorAll('.number-buttons');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        if ( displayedNumber === null) {
            displayedNumber = value;
        } else {
            displayedNumber += value;
        }
        displayContainer.textContent = displayedNumber
    });
});

const operationButtons = document.querySelectorAll('.operation-buttons');
operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonOperation = button.id;
        let buttonSign = button.textContent;

        operation = buttonOperation;
        firstNumber = Number(displayedNumber);
        displayedNumber += ` ${buttonSign} `;

        displayContainer.textContent = displayedNumber;
    });
});


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
    return operation(a, b);
}