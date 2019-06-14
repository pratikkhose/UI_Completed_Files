// Click on Minus button
$('#minus-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on Plus button
$('#plus-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on Multiply button
$('#multiply-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on Divide button
$('#divide-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on Equals button
$('#equals-button').click(function() {
    calculate();
});

// Calculate
let calculate = () => {
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();
    let operator = $('#operator').text();
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
        $('#result-button').text(result);
    }
};

// Click on Clear Button
$('#clear-button').click(function() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#operator').text('+');
    $('#result-button').text('RESULT');
});