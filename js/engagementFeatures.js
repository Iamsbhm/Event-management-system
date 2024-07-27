document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let postContent = document.getElementById('postContent').value;
    
    // Send post data to server (AJAX call)
    fetch('/post', {
      method: 'POST',
      body: JSON.stringify({ content: postContent }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // Display the post
    let posts = document.getElementById('posts');
    let postItem = document.createElement('div');
    postItem.innerText = postContent;
    posts.appendChild(postItem);
  });
  