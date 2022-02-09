const displayContainer = document.querySelector('.display-container');

let display = '0';
displayContainer.textContent = display;
let firstNumber = null;
let secondNumber = null;
let result = undefined;
let operation = undefined;

const numberButtons = document.querySelectorAll('.number-buttons');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (backsapaceButton.disabled) backspaceButtonSwitch();
        
        let value = button.textContent;
        if ( display === '0' || Number(displayContainer.textContent) === result) {
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
        if (backsapaceButton.disabled) backspaceButtonSwitch();


        if (display.split(' ').length === 3) {
            calculate();
            backsapaceButton.disabled = false;
            firstNumber = result;
            display = firstNumber;
        } else if (Number(displayContainer.textContent) === result) {
            firstNumber = result;
            display = firstNumber;
        }
        let buttonOperation = button.id;
        let buttonSign = button.textContent;

        operation = buttonOperation;
        display += ` ${buttonSign} `;

        displayContainer.textContent = display;
    });
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear)

const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', calculate);

const backsapaceButton = document.getElementById('backsapce');
backsapaceButton.addEventListener('click', backspace);

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
        if (Number(b) === 0) {
            alert("You can't divide a number by zero. At that point things not making sense.")
            clear();
            return 0;
        }
        return divide(a, b);
    };
};

function calculate () {
    if (!backsapaceButton.disabled) backspaceButtonSwitch();

    let separatedDisplay = display.split(' ');
    if (separatedDisplay.length === 1) {
        displayContainer.textContent = display;
        return
    }
    
    firstNumber = Number(separatedDisplay[0]);
    secondNumber = Number(separatedDisplay[2]);

    result = operate(operation, firstNumber, secondNumber);
    if (!Number.isInteger(result)) {
        result = result.toFixed(4);
    }
    displayContainer.textContent = result; 
};

function clear() {
    if (backsapaceButton.disabled) backspaceButtonSwitch();

    display = '0';
    displayContainer.textContent = display;
    firstNumber = null;
    secondNumber = null;
    result = undefined;
    operation = undefined;
};

function backspace() {
    if (!(Number(displayContainer.textContent) === result)) {
        if ( display.slice(-1) === ' ') {
            display = display.slice(0,-3);
        } else {
            display = display.slice(0,-1);
        };
        displayContainer.textContent = display;
    };
};

function backspaceButtonSwitch() {
    backsapaceButton.disabled = !backsapaceButton.disabled;
};