const newPost = async (event) => {
    event.preventDefault();
  
    const blog_title = document.querySelector('#post-title').value.trim();
    const blog_content = document.querySelector('#post-content').value.trim();
  if (blog_title && blog_content) {
      console.log(blog_title);
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ blog_title, blog_content}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  document
    .querySelector('.form-post')
    .addEventListener('submit', newPost);