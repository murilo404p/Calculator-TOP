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

let valorAtual = "";
let valorAnterior;
let operador = document.querySelectorAll(".operators-btn");
let numbers = document.querySelectorAll(".number-btn");


numbers.forEach(button => {
    button.addEventListener("click", () => {
        valorAtual =  valorAtual + button.dataset.value;
        document.getElementById("current-display").innerText = valorAtual;
    });
});