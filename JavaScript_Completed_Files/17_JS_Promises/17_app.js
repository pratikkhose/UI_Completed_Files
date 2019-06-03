// Promise
let doTask = (success,failure) => {
    // doing the task
    let isDone = false;
    if(isDone){
        success('Task is Done');
    }
    else{
        failure('Task is NOT Done');
    }
};

doTask((msg) => {
    console.log(msg);
} , (msg) => {
    console.log(msg);
});

// Actual Promise in JavaScript
let cleanLaptop = new Promise((resolve, reject) => {
    // doing the task
    let isCleaningDone = true;
    if(isCleaningDone){
        resolve('Cleaning is Done');
    }
    else {
        reject('Cleaning is NOT Done');
    }
});

cleanLaptop.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.error(msg);
});

// Dependent Promise
let doProject = new Promise((resolve, reject) => {
    // doing the project
    let isDone = true;
    if(isDone){
        resolve('Project is Finished');
    }
    else{
        reject('Project is NOT Finished');
    }
});

let technicalRound = new Promise((resolve, reject) => {
    // doing the technical round
    let isDone = true;
    if(isDone){
        resolve('Technical Round is Finished');
    }
    else{
        reject('Technical Round is Failed');
    }
});

let managerRound = new Promise((resolve, reject) => {
    // doing the manager round
    let isDone = true;
    if(isDone){
        resolve('Manager Round is Finished');
    }
    else{
        reject('Manager Round is Failed');
    }
});

let HRRound = new Promise((resolve, reject) => {
    // doing the HR round
    let isDone = true;
    if(isDone){
        resolve('HR Round is Finished');
    }
    else{
        reject('HR Round is Failed');
    }
});

doProject.then((msg) => {
    let output = `${msg} -> `;
    technicalRound.then((msg) => {
        output += `${msg} -> `;
        managerRound.then((msg) => {
            output += `${msg} -> `;
            HRRound.then((msg) => {
                output += `${msg} -> `;
                output += `Got a Job`;
                console.log(output);
            }).catch((msg) => {
                console.error(msg);
            });
        }).catch((msg) => {
            console.error(msg);
        });
    }).catch((msg) => {
        console.error(msg);
    });
}).catch((msg) => {
    console.error(msg);
});