// Normal Function
function add1(a , b) {
    let sum = a + b;
    return sum;
}
let result = add1(10,20);
console.log(`From Normal Function : ${result}`);

// Function Expression
let add2 = function(a , b) {
    let sum = a + b;
    return sum;
};
result = add2(10,20);
console.log(`From Function Expression : ${result}`);

// Arrow Function
let add3 = (a , b) => {
    let sum = a + b;
    return sum;
};
result = add3(10,20);
console.log(`From Arrow Function : ${result}`);