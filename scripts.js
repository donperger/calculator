const numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operationKeys = [
    {name: 'add', sign: '+'},
    {name: 'substract', sign: '-'},
    {name: 'multiply', sign: '*'},
    {name: 'divide', sign: '/'},
    ];
const displayContainer = document.querySelector('.display-container');

let display = '0';
displayContainer.textContent = display;
let firstNumber = null;
let secondNumber = null;
let result = undefined;
let operation = undefined;

const numberButtons = document.querySelectorAll('.number-buttons');
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = button.textContent;
        addNumber(value);
    });
});

const operationButtons = document.querySelectorAll('.operation-buttons');
operationButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonOperation = button.id;
        let buttonSign = button.textContent;
        addOperation(buttonOperation, buttonSign);
    });
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear)

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    if (!backsapaceButton.disabled) backspaceButtonSwitch();
    if (!floatPointButton.disabled) floatPointButtonSwitch();
    calculate();
});

const backsapaceButton = document.querySelector('.backsapce');
backsapaceButton.addEventListener('click', backspace);

const floatPointButton = document.querySelector('.float-point');
floatPointButton.addEventListener('click', floatPoint)


window.addEventListener('keydown', (e) => {
    if (numberKeys.includes(e.key)) {
        let value = e.key;
        addNumber(value);
    } else if ( operationKeys.filter(key => key.sign === e.key).length != 0) {
        let operationKeyObj = operationKeys.filter(key => key.sign === e.key);
        addOperation(operationKeyObj[0].name, operationKeyObj[0].sign);
    } else if (e.key === 'Enter' || e.key === '=') {
        if (!backsapaceButton.disabled) backspaceButtonSwitch();
        if (!floatPointButton.disabled) floatPointButtonSwitch();
        calculate();
    } else if (e.key === 'Backspace' && !backsapaceButton.disabled) {
        backspace();
    } else if ((e.key === '.' || e.key === ',') && !floatPointButton.disabled) {
        floatPoint();
    } else if (e.key === 'Escape') {
        clear();
    }
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
    if (floatPointButton.disabled) floatPointButtonSwitch();

    display = '0';
    displayContainer.textContent = display;
    firstNumber = null;
    secondNumber = null;
    result = undefined;
    operation = undefined;
};

function backspace() {
    if (!(Number(displayContainer.textContent) === Number(result))) {
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
    if (backsapaceButton.disabled) {
        backsapaceButton.classList.add('disabeled');
    } else {
        backsapaceButton.classList.remove('disabeled');
    }
};

function floatPointButtonSwitch() {
    floatPointButton.disabled = !floatPointButton.disabled;
    if (floatPointButton.disabled) {
        floatPointButton.classList.add('disabeled');
    } else {
        floatPointButton.classList.remove('disabeled');
    }
}

function floatPoint() {
    display += `.`;
    displayContainer.textContent = display;
    
    floatPointButtonSwitch();
};

function addNumber(value) {
    if (backsapaceButton.disabled) backspaceButtonSwitch();
        
    if ( display === '0' || Number(displayContainer.textContent) === Number(result)) {
        display = value;
    } else {
        display += value;
    }
    displayContainer.textContent = display;

    if (display.length === 1 && floatPointButton.disabled) floatPointButtonSwitch();
};

function addOperation(operationName, operationsSign) {
    if (backsapaceButton.disabled) backspaceButtonSwitch();
    if (floatPointButton.disabled) floatPointButtonSwitch();

    if (display.split(' ').length === 3) {
        calculate();

        backsapaceButton.disabled = false;
        floatPointButton.disabled = false;

        firstNumber = result;
        display = firstNumber;
    } else if (Number(displayContainer.textContent) === Number(result)) {
        firstNumber = result;
        display = firstNumber;
    }

    operation = operationName;
    display += ` ${operationsSign} `;

    displayContainer.textContent = display;
};