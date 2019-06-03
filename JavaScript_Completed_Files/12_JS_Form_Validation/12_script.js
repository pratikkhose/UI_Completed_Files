// Form Validation Logic
let validateForm = () => {
    // logic
    let isFormValid = validateUserName()
                        && validateEmail()
                        && validatePassword()
                        && validateConfirmPassword()
                        && validatePasswordsMatch();

    if(isFormValid){
        alert('Form is Submitted Successfully');
        return true;
    }
    else {
        return false;
    }
};

// UserName Validation
let validateUserName = () => {
    let usernameField = document.querySelector('#username');
    if(usernameField.value === ''){
        applyColors(usernameField);
        displayValidationMessage('Required User Name');
        return false;
    }
    if(usernameField.value.length < 5){
        applyColors(usernameField);
        displayValidationMessage('Required 5 Letters');
        return false;
    }
    if(!usernameField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        applyColors(usernameField);
        displayValidationMessage('No Special Characters');
        return false;
    }
    else{
        removeColors(usernameField);
        return true;
    }
};


// Email Validation
let validateEmail = () => {
    let emailField = document.querySelector('#email');
    if(emailField.value === ''){
        applyColors(emailField);
        displayValidationMessage('Required Email');
        return false;
    }
    else{
        removeColors(emailField);
        return true;
    }
};


// Password Validation
let validatePassword = () => {
    let passwordField = document.querySelector('#password');
    if(passwordField.value === ''){
        applyColors(passwordField);
        displayValidationMessage('Required Password');
        return false;
    }
    else{
        removeColors(passwordField);
        return true;
    }
};

// Confirm Password Validation
let validateConfirmPassword = () => {
    let confirmPasswordField = document.querySelector('#c_password');
    if(confirmPasswordField.value === ''){
        applyColors(confirmPasswordField);
        displayValidationMessage('Required Confirm Password');
        return false;
    }
    else{
        removeColors(confirmPasswordField);
        return true;
    }
};

// passwords Match Validation
let validatePasswordsMatch = () => {
    let passwordField = document.querySelector('#password');
    let confirmPasswordField = document.querySelector('#c_password');
    if(passwordField.value !== confirmPasswordField.value){
        applyColors(passwordField);
        applyColors(confirmPasswordField);
        displayValidationMessage('Passwords Not Matched');
        return false;
    }
    else{
        removeColors(passwordField);
        removeColors(confirmPasswordField);
        return true;
    }
};


// apply Colors
let applyColors = (inputField) => {
    inputField.style.border = '1px solid red';
    inputField.style.boxShadow = '0 0 10px red';
};

// remove Colors
let removeColors = (inputField) => {
    inputField.style.border = '1px solid green';
    inputField.style.boxShadow = '0 0 10px green';
};


// display Validation Message
let displayValidationMessage = (message) => {
    let h3Tag = document.createElement('h3');
    h3Tag.style.backgroundColor = 'red';
    h3Tag.innerText = message;
    document.querySelector('#msg-div').appendChild(h3Tag);
    setTimeout(deleteValidationMessage,2000);
};

// Delete Validation Message
let deleteValidationMessage = () => {
    document.querySelector('#msg-div h3').remove();
};

// Blur Events

// UserName Field
let userNameField = document.querySelector('#username');
userNameField.addEventListener('blur',function() {
    removeColors(userNameField);
});

// Email Field
let emailField = document.querySelector('#email');
emailField.addEventListener('blur',function() {
    removeColors(emailField);
});

// Password Field
let passwordField = document.querySelector('#password');
passwordField.addEventListener('blur',function() {
    removeColors(passwordField);
});

// Confirm Password Field
let confirmPasswordField = document.querySelector('#c_password');
confirmPasswordField.addEventListener('blur',function() {
    removeColors(confirmPasswordField);
});