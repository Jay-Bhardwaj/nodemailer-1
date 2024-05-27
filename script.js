// script.js
$(document).ready(function() {
    $('#sendVerificationEmail').click(function() {
        var email = $('#email').val();
        $.ajax({
            type: 'POST',
            url: '/send-otp',
            data: { email: email },
            success: function(response) {
                $('#verificationForm').hide();
                $('#otpForm').show();
               
