var Name = document.getElementById("name");
var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
var phone = document.getElementById("phone");
var phoneError = document.getElementById("phone-error");
var password = document.getElementById("pwd1");
var retypePassword = document.getElementById("pwd2");
var passwordError = document.getElementById("password-error");
var retypePasswordError = document.getElementById("retype-password-error");



function validate() {
    if(email_validate()){
        if(phone_validate()){
            if(password_validate()){
                if(password_match_checker()){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
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

function phone_validate() {
   let phonereg= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (phonereg.test(phone.value)) {
        phoneError.innerHTML = "<label><small>Valid Phone Number</small></label>";
        phoneError.style.color = "#16C79A";
        return true;
    } else {
        phoneError.innerHTML = "<label><small>Invalid Phone Number</small></label>";
        phoneError.style.color = "#FF5151";
        return false;
    }

}

function password_validate() {
    passwordreg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.value.length >= 8) {
        if (passwordreg.test(pwd1.value)) {
            if (password.value.length == 2) {
                passwordError.innerHTML = "<label><small>Password Strength: Poor</small></label>";
                passwordError.style.color = "#FF5151"
                password.style.border = "2px solid #FF5151";
                return false;
            } else if (password.value.length > 2 && password.value.length < 6) {
                passwordError.innerHTML = "<label><small>Password Strength: Medium</small></label>";
                passwordError.style.color = "#FFAB4C"
                password.style.border = "2px solid #FFAB4C";
                return false;
            } else if (password.value.length > 8) {
                passwordError.innerHTML = "<label><small>Password Strength: Strong</small></label>";
                passwordError.style.color = "#16C79A"
                password.style.border = "2px solid #16C79A";
                return true;
            }
        } else {
            passwordError.innerHTML = "<label><small>Password must contain at least 8 characters, one uppercase, one lowercase, one number.</small></label>";
            passwordError.style.color = "#FF5151"
            password.style.border = "2px solid #FF5151";
            return false;
            
        }
    } else {
        passwordError.innerHTML = "<label><small>Password Too Short.</small></label>";
        passwordError.style.color = "#FF5151"
        password.style.border = "2px solid #FF5151";
        return false;
    }

}

function password_match_checker() {
    if (password.value === retypePassword.value) {
        retypePasswordError.innerHTML = "<label><small>Password match.</small></label>";
        retypePasswordError.style.color = "#16C79A"
        retypePassword.style.border = "2px solid #16C79A";
        return true;
    }
    else{
        retypePasswordError.innerHTML = "<label><small>Password didn't match.</small></label>";
        retypePasswordError.style.color = "#FF5151"
        retypePassword.style.border = "2px solid #FF5151";
        return false;
    }
}