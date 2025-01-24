document.getElementById('reportForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting the traditional way
  event.preventDefault();

  // Get the form data (you can modify this to send data to a server if needed)
  const location = document.getElementById('location').value;
  const description = document.getElementById('description').value;
  
  // Check if required fields are filled out
  if (location && description) {
    // Display the success message
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.style.display = 'block';
    messageContainer.textContent = 'Your report has been submitted successfully!';

    // Clear the form after submission (optional)
    document.getElementById('reportForm').reset();

    // Optionally, you can add a delay to hide the success message after a few seconds
    setTimeout(function() {
      messageContainer.style.display = 'none';
    }, 5000); // Hide after 5 seconds
  } else {
    // If the required fields are not filled, you can display an error message (optional)
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.style.display = 'block';
    messageContainer.textContent = 'Please fill in all required fields.';
    messageContainer.style.backgroundColor = '#f2dede'; // Red background for error
    messageContainer.style.borderColor = '#ebccd1'; // Red border for error
    messageContainer.style.color = '#a94442'; // Red text color
  }
});
