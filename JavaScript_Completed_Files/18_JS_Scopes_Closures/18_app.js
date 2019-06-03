// Block Scoping with normal statements

let course = 'Engineering';
if(course === 'Engineering'){
    let job = 'Software';
}
console.log(course);
//console.log(job); // ReferenceError: job is not defined

// Function Scoping
let msg = 'Hello JS';
let greet = function() {
  let msg = "Good Morning";
};
greet();
// console.log(msg);  // ReferenceError: msg is not defined
console.log(msg);

// Nested Scopes
let a = 10;
let outerFn = () => {
     let a = 20;
    let innerFn = () => {
        let a = 30;
    };
    innerFn();
};
outerFn();
console.log(a);

// Closures
let x = 10;
let outerGreetFn = () => {
    let y = 20;
    let innerGreetFn = () => {
        let z = 30;
        console.log(x);
        console.log(y);
        console.log(z);
    };
    return innerGreetFn;
};
let greetEngine = (fName) => {
    fName();
};
let iFn = outerGreetFn();
greetEngine(iFn);

// Example 2 Closures
let add = (a) => {
    let addMore = (b) => {
        return a + b;
    };
    return addMore;
};
let result = add(100);
let newResult = result(200);
console.log(newResult);


