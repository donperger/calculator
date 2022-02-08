let displayedNumber = null;
const displayContainer = document.querySelector('.display-container')

const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
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