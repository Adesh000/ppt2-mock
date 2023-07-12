var form = document.getElementById("myForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var passwordInput = document.getElementById("password");
var ageInput = document.getElementById("age");
var genderInput = document.getElementById("gender");
var dateInput = document.getElementById("date");
var colorInput = document.getElementById("color");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var isValid = true;

  // Name validation
  if (nameInput.value === "") {
    displayError("name", "Name is required");
    isValid = false;
  } else {
    hideError("name");
  }

  // Email validation
  if (emailInput.value === "") {
    displayError("email", "Email is required");
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    displayError("email", "Invalid email format");
    isValid = false;
  } else {
    hideError("email");
  }

  // Phone number validation
  if (phoneInput.value === "") {
    displayError("phone", "Phone number is required");
    isValid = false;
  } else if (!validatePhoneNumber(phoneInput.value)) {
    displayError("phone", "Invalid phone number format");
    isValid = false;
  } else {
    hideError("phone");
  }

  // Password validation
  if (passwordInput.value === "") {
    displayError("password", "Password is required");
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    displayError("password", "Password must be at least 6 characters");
    isValid = false;
  } else {
    hideError("password");
  }

  // Age validation
  if (ageInput.value === "") {
    displayError("age", "Age is required");
    isValid = false;
  } else if (isNaN(ageInput.value) || ageInput.value <= 0) {
    displayError("age", "Invalid age");
    isValid = false;
  } else {
    hideError("age");
  }

  // Gender validation
  if (genderInput.value === "") {
    displayError("gender", "Gender is required");
    isValid = false;
  } else {
    hideError("gender");
  }

  // Date validation
  if (dateInput.value === "") {
    displayError("date", "Date is required");
    isValid = false;
  } else {
    hideError("date");
  }

  // Color validation
  if (colorInput.value === "") {
    displayError("color", "Color is required");
    isValid = false;
  } else {
    hideError("color");
  }

  // Submit the form if all fields are valid
  if (isValid) {
    form.submit();
  }
});

// Utility function to display error message
function displayError(fieldId, message) {
  var errorSpan = document.getElementById(fieldId + "Error");
  errorSpan.textContent = message;
}

// Utility function to hide error message
function hideError(fieldId) {
  var errorSpan = document.getElementById(fieldId + "Error");
  errorSpan.textContent = "";
}

// Utility function to validate email format
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility function to validate phone number format
function validatePhoneNumber(phoneNumber) {
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}
