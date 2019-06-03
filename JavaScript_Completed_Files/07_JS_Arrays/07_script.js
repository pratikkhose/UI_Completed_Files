// creation of arrays
let numbers = [10,20,30,40,50];
console.log(numbers);

// Accessing an array and its properties
console.log(numbers[0]); // 10

// Access not existed property from an array
console.log(numbers[6]); // undefined

// Accessing length of an Array
console.log(numbers.length); // 5


// shift() -> to remove an element from front of the array
let technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);


// unshift(elem) -> add any element to front of the array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.unshift('node js');
console.log(technologies);

// pop() -> remove last element
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// push() -> add last element
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.push('node js');
console.log(technologies);

// 1) splice(index) remove all the elements from the given index
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(1);
console.log(technologies);


// 2) splice(index,no of elements) removes the number of elements from the given index
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(3,1);
console.log(technologies);

// 3) splice(index,1,replace element) to replace the given element
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(2,1,'node js');
console.log(technologies);

// slice() is to create a new copy of an array
let arr1 = [10,20,30,40];
let arr2 = arr1.slice();
arr1.splice(2);
console.log(arr2);

// sort() -> to sort the array elements
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

// reverse() -> to reverse the array elements
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// Reverse Sort
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

// join() to join the elements with the given separator
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
let str = technologies.join(' * ');
console.log(str);

// Split() to split a string to an array
str = technologies.join(' * ');
console.log(str);
let newTechs = str.split(' * ');
console.log(newTechs);

// Loop from an Array
let colors = ['orange','red','blue','silver','black'];

// Normal for Loop
let output = '';
for(let i=0; i <colors.length ; i++){
   output += `${colors[i]} `;
}
console.log(output);

// for-in loop of ES5
output = '';
for(let index in colors){
    output += `${colors[index]} `;
}
console.log(output);

// for-of Loop of ES6
output = '';
for(let elem of colors){
    output += `${elem} `;
}
console.log(output);

// forEach function ES5
output = '';
colors.forEach(function(color) {
    output += `${color} `;
});
console.log(output);

// forEach with Arrow function ES6
output = '';
colors.forEach(color => output += `${color} `);
console.log(output);


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
