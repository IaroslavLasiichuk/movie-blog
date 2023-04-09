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

const delButtonHandler = async (event) => {
      console.log("dfsf");
      if (event.target.hasAttribute('data-delete')) {
        const id = event.target.getAttribute('data-delete');
    console.log(id);
        const response = await fetch(`/api/blog/${id}`, {
          method: 'DELETE',
        });
    console.log(response);
        if (response.ok) {
          document.location.replace('/blog');
        } else {
          alert('Failed to delete blog');
        }
      }
    };
    document.querySelectorAll('.btn-delete').forEach(button => {
      button.addEventListener('click', delButtonHandler);
    });

const editButtonHandler = async (event) => {
  const blog_content = document.querySelector('#post-content-edit').value;
      if (event.target.hasAttribute('data-edit')) {
        const id = event.target.getAttribute('data-edit');
        console.log(id);
        const response = await fetch(`/api/blog/${id}`, {
          method: 'PUT',
          body: JSON.stringify({blog_content}),
          headers: {
              'Content-Type': 'application/json',
         }
        });
        if (response.ok) {
          document.location.replace('/blog');
        } else {
          alert('Failed to edit blog');
        }
      }
    };
    
    document.querySelectorAll('.btn-edit').forEach(button => {
      button.addEventListener('click', editButtonHandler);
    });