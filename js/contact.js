const form = document.getElementById("form");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const modal = document.getElementById('Modal');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    modal.style.display = "block";
}

// Check phone is valid
function checkPhone(input) {
    const re = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
    if (re.test(input.value.trim())) {
        return true;
    } else {
        showError(input, "Невірно введений email");
        return false;
    }
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        return true;
    } else {
        showError(input, "Невірно введений email");
        return false;
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        }
    });

    return isRequired;
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        return true;
    }
    return false;
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!checkRequired([username, email])) {
        let usernameisok = checkLength(username, 3, 15);
        let userphoneisok = checkLength(phone, 10, 16);
        let useremailisok = checkEmail(email);
        if (usernameisok && userphoneisok && useremailisok) {
            showSuccess(username);
        }
    }
});
