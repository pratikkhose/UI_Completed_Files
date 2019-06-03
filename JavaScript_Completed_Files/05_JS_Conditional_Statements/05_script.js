// if-else condition
let time = -10;
let message = '';
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

// Switch
let day = new Date().getDay();
let today = `Today is : `;
switch(day){
    case 0:
        today += ' Sunday ';
        break;
    case 1:
        today += ' Monday ';
        break;
    case 2:
        today += ' Tuesday ';
        break;
    case 3:
        today += ' Wednesday ';
        break;
    case 4:
        today += ' Thursday ';
        break;
    case 5:
        today += ' Friday';
        break;
    case 6:
        today += ' Saturday ';
        break;
    default:
        today += ' No Match ';
        break;
}
console.log(today);

// For Loop to print from 0 - 10
let output = '';
for(let i =0; i<=10 ; i++){
  if(i <= 9){
      output += `${i} , `;
  }
  else{
      output += `${i}`;
  }
}
console.log(output);

// For Loop to print from 20 to 0 with diff is 2
output = '';
for(let i = 20; i>=0 ; i -= 2){
    if(i > 0){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// For loop to print the stars
output = '';
let theNumber = 5;
for(let i = 1; i<= theNumber ; i++){
    for(let j = 1; j<=i ; j++){
        output += '*'
    }
    output += '\n';
}
console.log(output);

// For loop to print the number triangle
output = '';
theNumber = 9;
for(let i = 1; i<= theNumber ; i++){
    for(let j = 1; j<=i ; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// For loop to print the number in reverse triangle
output = '';
theNumber = 9;
for(let i = theNumber; i >= 1 ; i--){
    for(let j = 1; j<=i ; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);


// For Loop to print numbers in orders
output = '';
theNumber = 9;
for(let i = 1; i<= theNumber ; i++){
    for(let j = 1; j<=i ; j++){
        output += j
    }
    output += '\n';
}
console.log(output);

// For Loop to print numbers in reverse order
output = '';
theNumber = 9;
for(let i = theNumber; i >= 1 ; i--){
    for(let j = 1; j<=i ; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// While Loop
console.log('-------------------- While Loop --------------------');

// While Loop to print from 0 - 10
output = '';
let i = 0;
while(i<=10){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
console.log(output);

// While Loop to print from 20 to 0 with diff is 2
output = '';
i = 20;
while(i >= 0){
    if(i > 0){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i -= 2;
}
console.log(output);

// While loop to print the stars
output = '';
theNumber = 5;
i = 1;
while(i<= theNumber){
    let j = 1;
    while(j<=i){
        output += '*';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// While loop to print the number triangle
output = '';
theNumber = 9;
i = 1;
while(i<= theNumber){
    let j = 1;
    while(j<=i){
        output += i;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// While loop to print the number in reverse triangle
output = '';
theNumber = 9;
i = theNumber;
while(i >= 1){
    let j = 1;
    while(j<=i){
        output += i;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);


// For Loop to print numbers in orders
output = '';
theNumber = 9;
i = 1;
while(i<= theNumber){
    let j = 1;
    while(j<=i){
        output += j;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// For Loop to print numbers in reverse order
output = '';
theNumber = 9;
i = theNumber;
while(i >= 1){
    let j = 1;
    while(j<=i){
        output += j;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// Do-While Loop is the Task
console.log("Do-While Loop");
theNumber = 9;
i = theNumber;
do {
    let j = 1;
    do {

        j++;
    }
    while (j <= i);
    output += '\n';
    i--;
}
while(i >= 1);
console.log(output);