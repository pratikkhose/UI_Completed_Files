// Show + Hide
$('#btn-1').click(function() {
    if($(this).text() === 'HIDE'){
        $(this).text('SHOW');
        $('#card-1').toggle(3000);
        $('#card-1').hide();
    }
    else{
        $(this).text('HIDE');
        $('#card-1').toggle(3000);
        $('#card-1').show();
    }
});


// Show + Hide => Toggle()
$('#btn-2').click(function() {
    $('#card-2').toggle(3000);
    ($(this).text() === 'HIDE') ? $(this).text('SHOW') : $(this).text('HIDE');
});

// fadeIn() , fadeOut() -> fadeToggle()
$('#btn1').click(function() {
    $(".par").toggle(1000);

    ($(this).text() === 'fadeIn') ? $(this).text('fadeOut') : $(this).text('fadeIn');
});


// slideup() , slideDown() -> slideToggle()
$('#btn2').click(function() {
    $(".par1").slideToggle(5000);

    ($(this).text() === 'slideUp') ? $(this).text('slideDown') : $(this).text('slideUp');
});