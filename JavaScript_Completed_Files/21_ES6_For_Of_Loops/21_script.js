let colors = ['red','green','blue','black','white'];

// Normal For-loop
let output = '';
for(let i = 0; i<colors.length; i++){
    output += `${colors[i].toUpperCase()} `;
}
console.log(output);

// For-In Loop ES5
output = '';
for(let index in colors){
    output += `${colors[index].toUpperCase()} `;
}
console.log(output);

// For-Of Loop ES6
output = '';
for(let color of colors){
    output += `${color.toUpperCase()} `;
}
console.log(output);

// forEach function ES5
output = '';
colors.forEach(function(color) {
    output += `${color.toUpperCase()} `;
});
console.log(output);

// forEach function with Arrow ES6
output = '';
colors.forEach(color => output += `${color.toUpperCase()} `);
console.log(output);