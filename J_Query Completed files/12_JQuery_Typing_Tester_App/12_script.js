let textArray=["Let us now look deep into what are objects. If we consider the real-world, we can find many objects around us, cars, dogs, humans, etc. All these objects have a state and a behavior.","If we consider a dog, then its state is - name, breed, color, and the behavior is - barking, wagging the tail, running.","If you compare the software object with a real-world object, they have very similar characteristics.","Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.","So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.","A class can have any number of methods to access the value of various kinds of methods. In the above example, barking(), hungry() and sleeping() are methods.","Following are some of the important topics that need to be discussed when looking into classes of the Java Language.","A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following","In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.","A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type."];
let clapSound = $('#clap-sound');
let congratsSound = $('#congrats-sound');
// Get all the HTML Elements
let originalTextElement = $('#original-text');
let textAreaBox = $('#text-area');
let messageCard = $('#message-card');
let messageElement = $('#message');
let resetButton = $('#reset-button');
let minutesElement = $('#minutes');
let secondsElement = $('#seconds');
let millySecondsElement = $('#m-seconds');
let timerRunning = false;
let timer = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;

// Keyup event on text-area box
textAreaBox.keyup(function() {
    let textEnteredLength = $(this).val().length;
    if(textEnteredLength === 1 && !timerRunning){
        // start the Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
    let originalText = originalTextElement.text();
    let textEntered = $(this).val();
    let partialText = originalText.substr(0,textEntered.length);
    evaluateText(originalText,textEntered,partialText);
});

// Click on Reset Functionality
resetButton.click(function() {
    clearInterval(interval);
    clearFormFields();
    generateRandomText();
});

// Evaluate Text
let evaluateText = (originalText,textEntered,partialText) => {
    if(textEntered === ''){
        // gray
        messageCard.removeClass('bg-success').removeClass('bg-primary').removeClass('bg-danger').addClass('bg-light');
        messageElement.text('');
    }
    else{
        if(textEntered === originalText){
            // green
            messageCard.removeClass('bg-light').removeClass('bg-primary').removeClass('bg-danger').addClass('bg-success');
            messageElement.text('Congratulation!');
            clearInterval(interval);
            congratsSound.trigger('play');
            showModal();
        }
        else{
            if(textEntered === partialText){
                // blue
                messageCard.removeClass('bg-light').removeClass('bg-success').removeClass('bg-danger').addClass('bg-primary');
                messageElement.text('Correct!');
            }
            else{
                // red
                messageCard.removeClass('bg-light').removeClass('bg-success').removeClass('bg-primary').addClass('bg-danger');
                messageElement.text('Wrong!');
                clapSound.trigger('play');
            }
        }
    }
};

// Start Timer
let startTimer = () => {
    timer++;
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.text(leadingZero(minutes));
    secondsElement.text(leadingZero(seconds));
    millySecondsElement.text(leadingZero(milliSeconds));
};

// Leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
};

// clearFormFields
let clearFormFields = () => {
    timerRunning = false;
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    minutesElement.text('00');
    secondsElement.text('00');
    millySecondsElement.text('00');
    textAreaBox.val('');
    messageCard.removeClass('bg-success').removeClass('bg-primary').removeClass('bg-danger').addClass('bg-light');
    messageElement.text('');
};

// Generate Random Text
let generateRandomText = () => {
    let randomIndex = Math.floor(Math.random() * 10);
    let randomText = textArray[randomIndex];
    originalTextElement.text(randomText);
};

// Show the Congrats Modal
let showModal = () => {
    // display timing details
    $('#congrats-modal').modal('show');
};