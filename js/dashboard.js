document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display events
    fetch('/getEvents')
      .then(response => response.json())
      .then(events => {
        let eventsList = document.getElementById('eventsList');
        events.forEach(event => {
          let eventItem = document.createElement('div');
          eventItem.innerText = event.title;
          eventsList.appendChild(eventItem);
        });
      });
  });
  