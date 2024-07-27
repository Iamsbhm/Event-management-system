document.getElementById('createEventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let location = document.getElementById('location').value;
    let ticketPrice = document.getElementById('ticketPrice').value;
    
    // Send data to server (AJAX call)
    fetch('/createEvent', {
      method: 'POST',
      body: JSON.stringify({ title, description, date, time, location, ticketPrice }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
  