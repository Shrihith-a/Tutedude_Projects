// Function to validate email format
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// Function to validate phone number (10 digits)
function isPhoneNumber(phone) {
    var regex = /^\d{10}$/;
    return regex.test(phone);
}

// Function to check if passwords match
function isPasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
}

// Function to validate the entire form
function validateForm() {
    var isValid = true;
    var name = $("#Name").val();
    var email = $("#Email").val();
    var phone = $("#phoneno").val();
    var address = $("#address").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirmpassword").val();

    // Reset previous errors
    $(".error").text("");

    // Validate name
    if (name.trim() === "") {
        $("#name-error").text("Name is required.");
        isValid = false;
    }

    // Validate email
    if (!isEmail(email)) {
        $("#email-error").text("Invalid email address.");
        isValid = false;
    }

    // Validate phone number
    if (!isPhoneNumber(phone)) {
        $("#phone-error").text("Invalid phone number. Must be 10 digits.");
        isValid = false;
    }

    // Validate address
    if (address.trim() === "") {
        $("#address-error").text("Address is required.");
        isValid = false;
    }

    // Validate password
    if (password.trim() === "") {
        $("#password-error").text("Password is required.");
        isValid = false;
    }

    // Validate password confirmation
    if (!isPasswordMatch(password, confirmPassword)) {
        $("#confirmpassword-error").text("Passwords do not match.");
        isValid = false;
    }

    // Show success message if form is valid
    if (isValid) {
        $("#form-success").text("Form is valid!").show();
    } else {
        $("#form-success").hide();
    }

    return isValid;
}

// jQuery to handle form submission
$("#submitbutton").click(function (event) {
    event.preventDefault(); // Prevent the form from submitting
    if (validateForm()) {
        alert("Form submitted successfully!");
        // Perform actual form submission here if needed
    }
});
