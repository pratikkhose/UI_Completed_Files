// Id Selector
$('#orange').click(function() {
    $(this).css({
        'background-color':'orange',
        'padding' : '10px',
        'border-radius' : '10px',
        'box-shadow' : '0 0 10px black'
    });
});


// Attribute Selector
$('input[type="text"]').focus(function() {
    $(this).css({
        'border' : '1px solid blue',
        'font-size' : '25px',
        'background-color' : 'lightblue'
    });
}).blur(function() {
    $(this).css({
        'border' : '1px solid lightgray',
        'font-size' : '16px',
        'background-color' : 'white'
    });
});