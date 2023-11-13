$(document).ready(function() {

    $('form').submit(function(event){
        let pwd = $('#pwd').val();
        let confirmPwd = $('#confirmPwd').val();
        
        if (pwd !== confirmPwd) {
            alert('Password and Confirm Password are incorrect');
            event.preventDefault();
        }
    });

});