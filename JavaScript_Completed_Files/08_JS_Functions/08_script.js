/*
1) function without parameters
2) function with parameters
3) function with return type
4) function with object as arguments
5) function with Array as arguments
6) function Expression
7) function itself as an arguments (call back)
8) nested function
9) function inside an object
10) function inside an array
11) functions to prepate chicken currry
 */

// 1) function without parameters
function greet() {
    console.log('Good Evening');
}
greet();

// 2) function with parameters
function greetMe(time) {
    if(time >= 0 && time <= 12){
        message = "Good Morning";
    }
    else if(time > 12 && time <= 17){
        message = "Good Afternoon";
    }
    else if(time > 17 && time <= 23){
        message = "Good Evening";
    }
    else{
        message = 'Enter Proper time';
    }
    console.log(message);
}
greetMe(25);

// 3) function with return type
function calculate(a, b, calType) {
    let result = 0;
    if(calType === 'sum'){
        result = a + b;
    }
    else if(calType === 'mul'){
        result = a * b;
    }
    else if(calType === 'sub'){
        result = a - b;
    }
    else if(calType === 'div'){
        result = a / b;
    }
    else{
        result = 'Enter Proper calType Dude!';
    }
    return result;
}
let theResult = calculate(10,20,'sum');
console.log(theResult);

// 4) function with object as arguments
let collegeStudent = {
    name : 'Rajan',
    age : 20,
    course : 'Engineering'
};

function printStudent(obj) {
    let printMsg = `Name : ${obj.name}
                    Age : ${obj.age}
                    Course : ${obj.course}`;
    console.log(printMsg);
}
printStudent(collegeStudent);
printStudent({name : 'Ram',age : 25, course : 'Medical'});

// 5) function with Array as arguments
let colors = ['orange','red','black','blue','silver'];
let technologies = ['html' , 'css','javscript','bootstrap'];

function displayArray(array) {
    let printMsg = '';
    for(let index in array){
        printMsg += `${index} => ${array[index]} \n`;
    }
    console.log(printMsg);
}
displayArray(colors);
displayArray(technologies);

// 6) function Expression
let reverseString = function(str) {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
let revStr = reverseString('Good Morning');
let normalStr = reverseString(revStr);
console.log(normalStr);

// 8) nested function
let outerFn = function() {
   let a = 10;
   let innerFn = function() {
       let b = 20;
       console.log(`a : ${a} , b : ${b}`);
   };
   innerFn();
};
outerFn();

// 9: Function inside an Object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    hobbies : ['coding','eating','sleeping'],
    address : {
      city : 'Bangalore',
      state : 'Karnataka',
      country : 'India'
    },
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// 10 . Arrow Function from ES6
let printNumbers = (number) => {
    let output = '';
    for(let i = 1; i<= number ; i++){
        for(let j = 1; j<=i ; j++){
            output += i;
        }
        output += '\n';
    }
    console.log(output);
};
printNumbers(6);

// 11. CallBack Functions
let greet1 = (name) => {
    console.log('Iam from Greet 1  function ' + name);
};

let greet2 = (name) => {
    console.log('Iam from Greet 2  function ' + name);
};

let greetCaller = (fName,name) => {
   fName(name);
};

greetCaller(greet2,'Wilson');

// CallBack Functions

let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculator = (a , b , callback) => {
    return callback(a , b);
};
console.log(calculator(10,20,sum));
console.log(calculator(10,20,mul));
console.log(calculator(10,20,(a , b) => {
    return a - b;
}));