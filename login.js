var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
var password = document.getElementById("password");
var passwordError = document.getElementById("password-error");

function validate(){
    if(email_validate()){
        if(password_validate()){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


function email_validate() {
    let emailreg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailreg.test(email.value)) {
        emailError.innerHTML = "<label><small>Valid Email</small></label>";
        emailError.style.color = "#16C79A";
        return true;
    } else {
        emailError.innerHTML = "<label><small>Invalid Email</small></label>";
        emailError.style.color = "#FF5151";
        return false;
    }
}

function password_validate() {
   
    let passwordreg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.value.length >= 8) {
        if (passwordreg.test(password.value)) {
            passwordError.innerHTML = "<label><small>Password correct.</small></label>";
            passwordError.style.color = "#FF5151"
            password.style.border = "2px solid #16C79A";
            return true;
        } else {
            passwordError.innerHTML = "<label><small>Password incorrect.</small></label>";
            passwordError.style.color = "#FF5151"
            password.style.border = "2px solid #FF5151";
            return false;        
        }
    } else {
        passwordError.innerHTML = "<label><small>Password Invalid</small></label>";
        passwordError.style.color = "#FF5151"
        password.style.border = "2px solid #FF5151";
        return false;
    }

}