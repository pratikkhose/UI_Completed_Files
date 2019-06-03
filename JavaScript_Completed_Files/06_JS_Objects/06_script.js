// Create an Object
let fridge = {};
fridge.eggs = 20;
fridge.veg = 'Tomotos';
fridge.fruits = 'Mangos';
console.log(fridge);

// Access the properties of an Object
console.log(fridge.fruits);

// Object with Data
let mobile = {
    brand : 'Apple',
    color : 'silver',
    price : 35000,
    isInsured : true
};
console.log(mobile);

// Access the properties of an object
console.log(`Brand : ${mobile.brand}`); // dot notation
console.log(`Brand : ${mobile['brand']}`); // [] notation

// Access non existing property
console.log(mobile.ramCapacity); // undefined

// Nested Objects
let student = {
    name : 'Rajan',
    course : 'Engineering',
    age : 22,
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);

// Access the nested Objects
console.log(`City : ${student.address.city}`);

// Add properties to Object
student.collegeName = 'IIT Mumbai';
console.log(student);

// Add properties to nested Object
console.log(student.address);
student.address.street = 'Jubliee Hills';
console.log(student.address);

// Delete properties from ab Object
console.log(student);
delete student.address;
console.log(student);