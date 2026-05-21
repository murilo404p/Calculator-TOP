import './style.css'

let expression = "";
let expressionTemp = "";
let operatorList = ['+', '-', '÷', 'x'];
let operators = document.querySelectorAll(".operators-btn");
let numbers = document.querySelectorAll(".number-btn");
let equal = document.getElementById("equalBtn");

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
        let lastCaracter = expression.at(-1);
        let firstCaracter = expression.at(0);
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
    document.getElementById('result').innerText = eval(expressionTemp);
});