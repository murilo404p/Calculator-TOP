let expression = "";
let expressionTemp = "";
let operators = document.querySelectorAll(".operators-btn");
let numbers = document.querySelectorAll(".number-btn");
let equal = document.getElementById("equalBtn")

import './style.css'

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}



const updateDisplay = (string) => {
    document.getElementById("current-display").innerText = string;
}

numbers.forEach(button => {
    button.addEventListener("click", () => {
        expression =  expression + button.dataset.value;
        updateDisplay(expression);
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        expression = expression + button.dataset.operator;
        updateDisplay(expression);
    });    
});

equal.addEventListener("click", () => {
    expressionTemp =  expression;
    if (expressionTemp.includes('x') || expressionTemp.includes('÷')) {
        expressionTemp = expressionTemp.replace(/x/g, '*');
        expressionTemp = expressionTemp.replace(/÷/g, '/');
    }
    document.getElementById('result').innerText = eval(expressionTemp);
});
