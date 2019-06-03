// var vs let
let course = 'Engineering';
if(course === 'Engineering'){
    let dept1 = 'Software';
    var dept2 = 'Govt';
}
console.log(course); // Engineering
// console.log(dept1); ReferenceError: dept1 is not defined
console.log(dept2); // Govt

// var vs let
for(var i=0; i<=10; i++){

}
console.log(i); // 11 , we can access this

// let vs const
const appName = 'JS App';
//appName = 'BS App'; // TypeError: Assignment to constant variable
console.log(appName);

// const Example
const employee = {
    name : 'John',
    age : 35,
    designation: 'Manager'
};
employee.designation = 'Sr. Manager';
console.log(employee);

// Function Scope with let  , var , const
let greet = () => {
    var msg1 = "Good Morning";
    let msg2 = "Good Afternoon";
    const msg3 = "Good Evening";
};
greet();
//console.log(msg1); // ReferenceError: msg1 is not defined
//console.log(msg2); // ReferenceError: msg2 is not defined
//console.log(msg3); // ReferenceError: msg3 is not defined

