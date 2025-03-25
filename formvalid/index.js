let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

// {****   Name Valid  ****}

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write a full name";
    return false;
  }
  nameError.innerHTML = '<i class ="fas fa-check-circle"></i>';
  return true;
}

// {****   Phone Valid   ****}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no. is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no. is should 10 digit";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digit please";
    return false;
  }
  phoneError.innerHTML = '<i class ="fas fa-check-circle"></i>';
  return true;
}

// {****   Email Valid  ****}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = '<i class ="fas fa-check-circle"></i>';
  return true;
}

// {****   Message Valid  ****}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + "more character required";
    return false;
  }
  messageError.innerHTML = '<i class ="fas fa-check-circle"></i>';
  return true;
}

// {********  Validate Form   *********}
function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";

    setTimeout(function () {
      submitError.style.display = "none";
    }, 2000);
    return false;
  }
}
