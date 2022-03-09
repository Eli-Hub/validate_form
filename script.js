var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('check-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required'
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write Full name'
        return false;
    }
    nameError.innerHTML = '<i class ="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('check-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number less than 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits are allowed.'
        return false;
    }
    phoneError.innerHTML = '<i class ="fas fa-check-circle"></i>'
    return true;
}

function validateEmail() {
    var email = document.getElementById('check-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid Email'
        return false;
    }

    emailError.innerHTML = '<i class ="fas fa-check-circle"></i>'
    return true;

}

function validateMessage() {
    var message = document.getElementById('check-message').value;
    var req = 30;
    var left = req - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required.';
        return false;
    }
    messageError.innerHTML = '<i class ="fas fa-check-circle"></i>'

    return true;
}

function validateForm() {
    if (!validateEmail() || !validateName() || !validateMessage() || !validatePhone()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fix errors in form to submit'
        setTimeout(function() { submitError.style.display = 'none'; }, 3000);
        return false;

    }
    submitError.innerHTML = '<i class ="fas fa-check-circle"></i>'
    return true;
}