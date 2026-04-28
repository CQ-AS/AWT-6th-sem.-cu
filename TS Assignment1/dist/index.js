"use strict";
const inputPassword = document.getElementById("password");
const button = document.getElementById("button");
button.addEventListener('click', () => {
    if (inputPassword.type === "password") {
        console.log("view button click...");
        inputPassword.type = "text";
        button.textContent = "🙈";
    }
    else {
        console.log("hide button click...");
        inputPassword.type = "password";
        button.textContent = "👁️";
    }
});
