// Get the HTML elements
let firstNumberBox = document.querySelector('#firstNumber');
let secondNumberBox = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let divideButton = document.querySelector('#divide-button');
let multiplyButton = document.querySelector('#multiply-button');
let clearButton = document.querySelector('#clear-button');

// click on Minus Button
minusButton.addEventListener('click',function() {
   operatorButton.innerText = minusButton.innerText;
    calculate();
});

// Click on Plus Button
plusButton.addEventListener('click',function() {
    operatorButton.innerText = plusButton.innerText;
    calculate();
});

// Click on Divide Button
divideButton.addEventListener('click',function() {
    operatorButton.innerText = divideButton.innerText;
    calculate();
});

// Click on Multiply Button
multiplyButton.addEventListener('click',function() {
    operatorButton.innerText = multiplyButton.innerText;
    calculate();
});

// Click on Equals Button
equalsButton.addEventListener('click',function() {
    calculate();
});

// Calculate Logic
let calculate = () => {
    let firstNumber = firstNumberBox.value;
    let secondNumber = secondNumberBox.value;
    let operator = operatorButton.innerText;
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
        }
        resultButton.innerText = result;
    }
};

// Click on Clear Button
clearButton.addEventListener('click',function() {
   firstNumberBox.value = '';
   secondNumberBox.value = '';
   operatorButton.innerText = '+';
   resultButton.innerText = 'RESULT';
});

