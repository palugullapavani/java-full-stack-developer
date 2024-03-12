

const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };
  
  function validateLoginForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
  
    if (username === "" || password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Both username and password are required.'
      });
      return false;
    }
  
    // Assume login success for demonstration purposes
    showSuccessMessage("Login successful!");
    return true;
  }
  
  function validateAndSubmit(isLoginForm) {
    var password = document.getElementById("password").value;
  
    // Basic form validation
    if (password.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Password is required.'
      });
      return false;
    }
  
    // Additional validation for sign-up form
    if (!isLoginForm) {
      var correctPassword = "your_correct_password"; // Replace with your actual correct password
  
      // Check if the password is correct for sign-up
      if (password !== correctPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Incorrect password. Please try again.'
        });
        return false;
      }
    }
  
    // Call your sendMail function
    sendMail();
  
    // Simulate a successful submission
    Swal.fire({
      icon: 'success',
      title: 'Submission Successful',
      text: 'Form submitted successfully!'
    });
  
    // Optionally, you can submit the form programmatically
    // document.getElementById("yourFormId").submit();
  
    // You can redirect to another page or perform other actions here
    return false;
  }
  
  function sendMail() {
    // Your existing sendMail logic here
    // ...
  }
  
  function showSuccessMessage(message) {
    // Display the success message in a modal or a dedicated section
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message
    });
  }
  