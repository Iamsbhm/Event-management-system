document.getElementById('searchButton').addEventListener('click', function() {
    let query = document.getElementById('searchQuery').value;
    
    // Fetch and display search results
    fetch(`/searchEvents?query=${query}`)
      .then(response => response.json())
      .then(events => {
        let searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';
        events.forEach(event => {
          let eventItem = document.createElement('div');
          eventItem.innerText = event.title;
          searchResults.appendChild(eventItem);
        });
      });
  });
  