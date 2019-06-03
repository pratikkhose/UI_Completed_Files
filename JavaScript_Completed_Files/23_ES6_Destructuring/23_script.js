let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

// Destructuring
let {name , age , course } = student;

console.log(`Name : ${name}
             Age : ${age}
             Course : ${course}`);

// Destructuring
let {city , state , country } = student.address;

console.log(`City : ${city}
             State : ${state}
             Country : ${country}`);
