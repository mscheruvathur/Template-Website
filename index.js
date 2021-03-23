/*$(function() {

    $("#fname_error_message").hide();
    $("#email_error_message").hide();

    var error_fname = false;
    var error_email = false;

    $("#form_fname").focusout(function() {
        check_fname();
    });

    $("#form_email").focusout(function() {
        check_email();
    });


    function check_fname() {
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#form_fname").val();
        if (pattern.test(fname) && fname !== '') {
            $("#fname_error_message").hide();
            $("#form_fname").css("border-bottom", "2px solid #34F458");
        } else {
            $("#fname_error_message").html("Should contain only Characters");
            $("#fname_error_message").show();
            $("#form_fname").css("border-bottom", "2px solid #F90A0A");
            error_fname = true;
        }
    }

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#form_email").val();
        if (pattern.test(email) && email !== '') {
            $("#email_error_message").hide();
            $("#form_email").css("border-bottom", "2px solid #34F458");
        } else {
            $("#email_error_message").html("Invalid Email");
            $("#email_error_message").show();
            $("#form_email").css("border-bottom", "2px solid #F90A0A");
            error_email = true;
        }
    }

    $("#registration_form").submit(function() {
        error_fname = false;
        error_email = false;

        check_fname();
        check_email();

        if (error_fname === false && error_email === false) {
            alert("Registration Successfull");
            return true;
        } else {
            alert("Please Fill the form Correctly");
            return false;
        }


    });
});

*/
/*
$(document).ready(function() {
    $("#gform").validate({
        rules: {
            uname: {
                required: true,
                minlength: 4,

            },
            emailAddress: {
                required: true,
                email: true
            },
            mobnumer: {
                required: true,
                minlength: 10,
                maxlength: 10,
            }
        },
        messages: {
            uname: {
                minlength: "enter at least 4 letter",
                required: "please enter your name"
            },
            emailAddress: {
                required: "please enter your email",
                email: "please enter a valid email"
            },
            mobnumer: {
                required: "plese enter your mobile number",
                maxlength: "only 10 digits allowed"
            }

        }
    })
})
*/
/*

function inputValidation(inputTxt) {

    var regx = /^[0-9a-zA-Z ]+$/;
    var textField = document.getElementById("textField");

    if (inputTxt.value != '') {

        if (inputTxt.value.length >= 5) {

            if (inputTxt.value.match(regx)) {
                textField.textContent = 'Good input';
                textField.style.color = "green";

            } else {
                textField.textContent = 'only numbers, letters And White space';
                textField.style.color = "red";
            }
        } else {
            textField.textContent = 'your input is less than 5 chracters';
            textField.style.color = "red";
        }
    } else {
        textField.textContent = 'your input is empty';
        textField.style.color = "red";
    }
}
*/