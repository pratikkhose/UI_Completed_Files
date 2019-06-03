// Assignment operator =
let abc = 10;
console.log(`The value of a is : ${abc}`);

// Arithmetic operators + - * / , %
let num1 = 10;
let num2 = 20;
console.log(`Sum is : ${num1 + num2}`);
console.log(`Sub is : ${num1 - num2}`);
console.log(`Mul is : ${num1 * num2}`);
console.log(`Div is : ${num1 / num2}`);
let number = 103;
if(number % 2 === 0){
    console.log(`${number} is Even Number`);
}
else{
    console.log(`${number} is Odd Number`);
}

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let add = 0;
add = add + (a + b); // 0 + 10 + 20 => 30
add += (a + b); // 30 + 10 + 20 => 60
console.log(add);

// Conditional operators < , > , <= , >= , !=
let age = 15;
if(age > 18){
    console.log('You are Major');
}
else{
    console.log('You are Minor');
}

// Unary Operator ++ , -- (pre , post)
let x = 10;
x = x + 1; // 11
x += 1; // 12
x++; // 13
console.log(x);

// Logical operators AND , OR
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the parents Agreed');
}

// String Concatenation Operator (+)
let name = 'John';
age = 40;
console.log(name + " , " + age);
console.log(`${name} , ${age}`);

// Ternary operator (? :)
age = 25;
let message = '';
(age > 18)? message = 'You are Major' : message = 'You are Minor';
console.log(message);

// Type of operator
let test = 'john';
console.log(`value : ${test} Type : ${typeof test}`);

// == operator


// === operator