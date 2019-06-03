let numbers = [10,25,35,5,654,987,97,9798,77,9878,1,2,6];
/*let min = numbers[0];
for(let number of numbers){
    if(number < min){
        min = number;
    }
}*/
let min = Math.min(...numbers);
console.log(`Min : ${min}`);

// Spread operator in the middle of array / Merge the array
let colors1 = ['white','black'];
let colors2 = [...colors1 , 'blue','red','green'];
console.log(colors2);

// Spread operator to create a copy of an array
let array1 = [10,20,30,40];
let array2 = array1.slice(); // to create a new copy
array2 = [...array1];
console.log(array2);