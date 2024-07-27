document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let ticketType = document.getElementById('ticketType').value;
    
    // Send registration data to server (AJAX call)
    fetch('/registerForEvent', {
      method: 'POST',
      body: JSON.stringify({ ticketType }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
  