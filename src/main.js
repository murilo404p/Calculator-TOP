import './style.css'
import { evaluate } from 'mathjs';

let expression = "";
let expressionTemp = "";
let operatorList = ['+', '-', '÷', 'x'];
let showingResult = false;
let currentDisplay = document.getElementById("current-display");
let resultDisplay = document.getElementById("result");
let operators = document.querySelectorAll(".operators-btn");
let numbers = document.querySelectorAll(".number-btn");
let equal = document.getElementById("equalBtn");
let clearBtn = document.querySelectorAll(".clear-btn");


const updateDisplay = (string) => {
    currentDisplay.innerText = string;
}

const updateResult = (string) => {
    resultDisplay.innerText = string;
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
        let result = evaluate(expressionTemp);
        resultDisplay.innerText = result;
        showingResult = true;
    } catch (error) {
        resultDisplay.innerText = "Conta inválida";
        showingResult = true;
    }
});

clearBtn.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === 'allClear') {
            expression = "";
            updateResult(expression);
            updateDisplay(expression);
        } else if (button.id === 'clear')  {
            expression = expression.slice(0, -1);
            updateDisplay(expression);
        }
    });
});

