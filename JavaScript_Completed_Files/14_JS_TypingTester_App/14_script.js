// GET the HTML Elements
let clapSound = document.querySelector('#clap-sound');
let congratsSound = document.querySelector('#congrats-sound');
let textArray=["Let us now look deep into what are objects. If we consider the real-world, we can find many objects around us, cars, dogs, humans, etc. All these objects have a state and a behavior.","If we consider a dog, then its state is - name, breed, color, and the behavior is - barking, wagging the tail, running.","If you compare the software object with a real-world object, they have very similar characteristics.","Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.","So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.","A class can have any number of methods to access the value of various kinds of methods. In the above example, barking(), hungry() and sleeping() are methods.","Following are some of the important topics that need to be discussed when looking into classes of the Java Language.","A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following","In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.","A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type."];
let originalTextElement = document.querySelector('#original-text');
let textAreaBox = document.querySelector('#text-area');
let minutesElement  = document.querySelector('#minutes');
let secondsElement  = document.querySelector('#seconds');
let milliSecondsElement  = document.querySelector('#m-seconds');
let resetButton = document.querySelector('#reset');
let congratsMessageDiv = document.querySelector('.cong-section');
let timer = 0;
let timerRunning = false;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;

// Keyup event for TextArea
textAreaBox.addEventListener('keyup',function() {
    let textEnteredLength = textAreaBox.value.length;
    if(textEnteredLength === 1 && !timerRunning){
        //start the Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
    let originalText = originalTextElement.innerText;
    let textEntered = textAreaBox.value;
    let partialText = originalText.substr(0,textEntered.length);
    // Evaluate Text
    evaluateText(originalText,textEntered,partialText);
});

// Click on Reset Button
resetButton.addEventListener('click',function() {
    // stop the timer
    clearInterval(interval);
    resetVariables();
    changeColor('gray');
    textAreaBox.value = '';
    minutesElement.innerText = '00';
    secondsElement.innerText = '00';
    milliSecondsElement.innerText = '00';
    changeOriginalText('Thank You! Try another Lesson');
    congratsMessageDiv.style.display = 'none';
});

// Evaluate Text
let evaluateText = (originalText,textEntered,partialText) => {
    // if the textEntered is empty
    if(textEntered === ''){
        changeColor('gray');
    }
    // if the textEntered is NOT empty
    else{
        if(textEntered === originalText){
            changeColor('green');
            // stop the timer
            clearInterval(interval);
            // Display Congrats Section
            congratsMessageDiv.style.display = 'block';
            congratsSound.play();
        }
        else{
            if(textEntered === partialText){
                changeColor('blue');
            }
            else{
                changeColor('red');
                clapSound.play();
            }
        }
    }
};


// start the Timer
let startTimer = () => {
    timer++;

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.innerText = leadingZero(minutes);
    secondsElement.innerText = leadingZero(seconds);
    milliSecondsElement.innerText = leadingZero(milliSeconds);
};

// leadingZero
let leadingZero = (time) => {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
};

// Change Color
let changeColor = (color) => {
    textAreaBox.style.borderColor = color;
};

// resetVariables
let resetVariables = () => {
    timer = 0;
    timerRunning = false;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
};

// let change Original Text for Reset Button
let changeOriginalText = (text) => {
    originalTextElement.innerText = text;
};

// change originalText for Lessons
let changeText = (index) => {
    let theText = textArray[index];
    originalTextElement.innerText = theText;
};