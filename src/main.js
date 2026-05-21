import './style.css'

let expression = "";
let expressionTemp = "";
let operatorList = ['+', '-', '÷', 'x'];
let showingResult = false;
let operators = document.querySelectorAll(".operators-btn");
let numbers = document.querySelectorAll(".number-btn");
let equal = document.getElementById("equalBtn");
let clearBtn = document.querySelectorAll(".clear-btn");


const updateDisplay = (string) => {
    document.getElementById("current-display").innerText = string;
}

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (showingResult === true) {
            expression = "";
            showingResult = false;
        }
        expression =  expression + button.dataset.value;
        updateDisplay(expression);
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        let lastCaracter = expression.at(-1);
        if (operatorList.includes(lastCaracter) || expression == "") {
            return;
        }
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
    try {
        let result = eval(expressionTemp);
        document.getElementById("result").innerText = result;
        showingResult = true;
    } catch (error) {
        document.getElementById("result").innerText = "Conta inválida";
    }
});

