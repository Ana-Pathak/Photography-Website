$(document).ready(function () {

//email validation
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

$("#appointment_form").submit(

function(event) {
        var isValid = true;             
        var email = $("#email").val().trim();
        if (email == "") {
            $("#email").next().text("Email field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
        if (isValid == false) {
            event.preventDefault();
        }
}

);

function validateForm() {
    alert("Validation");
    return true;
}

});