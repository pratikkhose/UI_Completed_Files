// Click Event
let images = ['image1.jpg','image2.jpg','image3.jpeg','image4.jpeg','image5.jpeg','image6.jpeg','image7.jpeg'];
$('#btn-1').click(function() {
    let random = getRandomNumber();
    if(random > 6){
        random = getRandomNumber();
    }
    else{
        $('#image').attr('src','../img/' + images[random]);
    }
});

// get random Number
let getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
};

let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// Keyup event
$('#text-box').keyup(function() {
    $('#display').text(reverseString($(this).val()));
});

// Click Event
$('#technologies').change(function() {
    let selectedOption = $(this).val();
    $('#options').text(selectedOption.toUpperCase());
});






