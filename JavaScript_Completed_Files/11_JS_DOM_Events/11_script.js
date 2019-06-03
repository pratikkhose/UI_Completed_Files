// ChangeWishMessage
let changeWishMessage = (msg,color) => {
    let h2Tag = document.querySelector('#msg1');
    h2Tag.innerText = msg;
    h2Tag.style.backgroundColor = color;
    h2Tag.style.padding = '10px';
};