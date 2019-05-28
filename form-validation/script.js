'use strict';

const submitForm = document.getElementById('submitForm');

function validate(e){
    let username = document.forms["register"]["username"].value;
    let email = document.forms["register"]["email"].value;
    let confirmEmail = document.forms["register"]["confirmEmail"].value;
    let pw = document.forms["register"]["pw"].value;
    let pw2 = document.forms["register"]["pw2"].value;
    let response = document.getElementById("response").innerText;

    if (username.length < 6) {
        alert("Username must have six characters");
    }
    if (!email.includes('@') && !email.includes('.')) {
        alert("Please use a valid email address");
    }
    if (email !== confirmEmail){
        alert("Emails do not match")
    }
    if (pw.length < 6) {
        alert("Password six character minimum");
    }
    if (pw !== pw2){
        alert("Passwords do not match");
    } 
    if (username.length <6 && !email.includes('@') && email.includes('.') && !pw === pw2) {
        window.location.href = "success.html";
    }
}

submitForm.addEventListener('click', validate);