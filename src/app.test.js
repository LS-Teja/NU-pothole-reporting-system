//test('that Jest is working', () => {
//expect(2 + 2).toBe(4)
//})

test('should display success message when report is submitted successfully', () => {
    // Find the form, location, description, and message container
    const form = document.getElementById('reportForm');
    const location = document.getElementById('location');
    const description = document.getElementById('description');
    const messageContainer = document.getElementById('messageContainer');
  
    // Ensure the location and description fields exist
    if (location && description) {
      // Simulate filling out the form
      location.value = 'Some Street, City';
      description.value = 'Pothole on the road';
  
      // Trigger the submit event
      form.dispatchEvent(new dom.window.Event('submit'));
  
      // Check if the success message is displayed
      expect(messageContainer.textContent).toBe('Your report has been submitted successfully!');
    }
  });
  