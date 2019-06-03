/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(`Pi Value : ${piValue}`);

// Math sqrt
let sqrt = Math.sqrt(256);
console.log(`sqrt of 256 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(45,78,6954,844,135,198,4981,35,18,496,4);
console.log(`Min : ${min}`);

// find the Max of 4 numbers
let max = Math.max(45,78,6954,844,135,198,4981,35,18,496,4);
console.log(`Max : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^5
let pow = Math.pow(2,5);
console.log(`2 ^ 5 is  : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let today = new Date().toLocaleDateString();
console.log(today);

let time = new Date().toLocaleTimeString();
console.log(time);

// get full day of the week using switch statement
let day = new Date().getDay();
today = `Today is : `;
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

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

let infinite = Number.NEGATIVE_INFINITY;
console.log(infinite);

let num1 = 100;
num1 = num1.toString();
console.log(typeof num1);

let str = '500.45';
let num2 = Number(str);
console.log(num2);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let msg = 'Good Morning';

// Uppercase
console.log(msg.toUpperCase());

// lowercase
console.log(msg.toLowerCase());

// length
console.log(msg.length);

// charAt
console.log(msg.charAt(0)); // G

// charCodeAt
console.log(msg.charCodeAt(0)); // 71

// substr
console.log(msg.substr(0,4)); // Good


// Example 1 : Count No-of o's in the string
let theStr = "Good Morning";
let countZeros = (str) => {
   let count = 0;
   for(let i=0; i<str.length;i++){
       let char = str.charAt(i);
       if(char === 'o' || char === 'O'){
           count++;
       }
   }
   return count;
};
console.log(countZeros(theStr));

// Example 3 : reverse String
theStr = "Good Morning";
let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseString(theStr));

// Example 4 : check is palindrome or not
theStr = "ABA";
    let isPalindrome = (str) => {
        return str === reverseString(str);
};
console.log(isPalindrome(theStr));

// Example 5 : convert to Palindrome
theStr = 'ABC';
let convertToPalindrome = (str) => {
      let tempStr = str;
      for(let i=str.length-2; i>=0; i--){
          tempStr += str.charAt(i);
      }
      return tempStr;
};
console.log(convertToPalindrome(theStr));

// Example 6 : convert to Word Number
let theNumber = '587';
let array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE']
let convertToWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++){
        let digit = Number(str.charAt(i));
        tempStr += `${array[digit]} `;
    }
    return tempStr;
};
console.log(convertToWordNumber(theNumber));