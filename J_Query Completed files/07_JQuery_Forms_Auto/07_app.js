// Keyup event on username
$('#username').keyup(function() {
    $('#user_text').text($(this).val());
});

// Keyup event on Password
$('#password').keyup(function() {
    $('#pass_text').text($(this).val());
});

// Keyup event on email
$('#email').keyup(function() {
    $('#email_text').text($(this).val());
});