let array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let convertToWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++){
        let digit = Number(str.charAt(i));
        tempStr += `${array[digit]} `;
    }
    return tempStr;
};