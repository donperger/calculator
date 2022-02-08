let a = 2;
let b = 2;

console.log(add(a, b));
console.log(substract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
console.log(operate(add, a, b));

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