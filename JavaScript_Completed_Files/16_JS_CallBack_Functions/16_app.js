let a = () => {
  console.log('Iam a function');
};

let b = (x) => {
    x();
    console.log('Iam b function');
};

b(a);

// usage of callback function
let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a, b, fName) => {
    return fName(a , b);
};

console.log(calculate(10,20,sum));
console.log(calculate(10,20,mul));
console.log(calculate(10,20,(a , b) => {
    return a - b;
}));
console.log(calculate(10,20,(a , b) => {
    return 100 - (a + b);
}));
