const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#passwordconfirm");
const form = document.querySelector(".signup-form");
const passLabel = document.querySelector("#passLabel");

form.addEventListener("submit", passCheck);

function passCheck(e)
{
    if(confirmPasswordField.value != passwordField.value)
    {
        e.preventDefault();
        passwordField.classList.remove("signup-inputs-field");
        confirmPasswordField.classList.remove("signup-inputs-field")
    
        passwordField.classList.add("password-error");
        confirmPasswordField.classList.add("password-error");
        passLabel.classList.add("password-error-check");
    }
}
