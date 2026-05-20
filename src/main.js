let expressaoAtual = "";
let operators = document.querySelectorAll(".operators-btn");
let numbers = document.querySelectorAll(".number-btn");

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
        expressaoAtual =  expressaoAtual + button.dataset.value;
        updateDisplay(expressaoAtual);
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        expressaoAtual = expressaoAtual + button.dataset.operator;
        updateDisplay(expressaoAtual);
    });    
});


