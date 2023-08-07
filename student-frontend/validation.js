
function validateFirstName() {
    const firstNameInput = document.getElementById("first_name");
    const firstNameValue = firstNameInput.value.trim();
    const namePattern = /^[A-Za-z]+$/; 
    if (firstNameValue === "") {
      firstNameInput.setCustomValidity("Please enter your first name.");
    } else if (!namePattern.test(firstNameValue)) {
      firstNameInput.setCustomValidity("First name should contain only letters.");
    } else {
      firstNameInput.setCustomValidity("");
    }
  }

  function validateLastName() {
    const lastNameInput = document.getElementById("last_name");
    const lastNameValue = lastNameInput.value.trim();
    const namePattern = /^[A-Za-z]+$/;
    if (lastNameValue === "") {
      lastNameInput.setCustomValidity("Please enter your last name.");
    } else if (!namePattern.test(lastNameValue)) {
      lastNameInput.setCustomValidity("Last name should contain only letters.");
    } else {
      lastNameInput.setCustomValidity("");
    }
  }

  function validateDOB() {
    const dobInput = document.getElementById("dob");
    const dobValue = dobInput.value;
    if (dobValue === "") {
      dobInput.setCustomValidity("Please enter your date of birth.");
    } else {
      const dobDate = new Date(dobValue);
      const currentDate = new Date();
      if (dobDate > currentDate) {
        dobInput.setCustomValidity("Date of birth cannot be a future date.");
      } else {
        dobInput.setCustomValidity("");
      }
    }
  }

  function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      emailInput.setCustomValidity("Please enter your email address.");
    } else if (!isValidEmail(emailValue)) {
      emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
      emailInput.setCustomValidity("");
    }
  }

  function validatePhoneNumber() {
    const phoneNumberInput = document.getElementById("phone_number");
    const phoneNumberValue = phoneNumberInput.value.trim();
    if (phoneNumberValue === "") {
      phoneNumberInput.setCustomValidity("Please enter your phone number.");
    } else if (!isValidPhoneNumber(phoneNumberValue)) {
      phoneNumberInput.setCustomValidity("Please enter a valid phone number.");
    } else {
      phoneNumberInput.setCustomValidity("");
    }
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }


  function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
  }

  document.getElementById("first_name").addEventListener("input", validateFirstName);
  document.getElementById("last_name").addEventListener("input", validateLastName);
  document.getElementById("dob").addEventListener("input", validateDOB);
  document.getElementById("email").addEventListener("input", validateEmail);
  document.getElementById("phone_number").addEventListener("input", validatePhoneNumber);

  const myForm = document.getElementById("addStudentForm");
  myForm.addEventListener("submit", function (event) {
    if (!myForm.checkValidity()) {
      event.preventDefault(); 
    }
  });