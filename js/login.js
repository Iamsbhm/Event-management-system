document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // Send data to server (AJAX call)
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
  