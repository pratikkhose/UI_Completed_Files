// SMS App
$('#text-area').keyup(function () {
    $('#span').text($(this).attr('maxlength') - $(this).val().length);
});

// Change Password to Text
$('#check-box').change(function() {
    let passwordBox = $('#password-box');
    (passwordBox.attr('type') === 'password') ? passwordBox.attr('type','text') : passwordBox.attr('type','password');
});

// Likes App
let likes = 0;
let dislikes = 0;
let total = 0;
$('#likes-btn').click(function() {
    likes++;
    total++;
    $('#likes').text(likes);
    $('#total').text(total);
});

$('#dislikes-btn').click(function() {
    dislikes++;
    total++;
    $('#dislikes').text(dislikes);
    $('#total').text(total);
});