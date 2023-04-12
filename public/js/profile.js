// Creates new post
const newPost = async (event) => {
    event.preventDefault();
    const blog_title = document.querySelector('#post-title').value.trim();
    const blog_content = document.querySelector('#post-content').value.trim();
  if (blog_title && blog_content) {
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
    .querySelector('.btn-add-post')
    .addEventListener('click', newPost);

// Delete post
const delButtonHandler = async (event) => {
      if (event.target.hasAttribute('data-delete')) {
        const id = event.target.getAttribute('data-delete');
        const response = await fetch(`/api/blog/${id}`, {
          method: 'DELETE',
        });
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

// Edit post
const editButtonHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-edit');
  const blog_content = document.querySelector(`#post-content-edit-${id}`).value;
      if (event.target.hasAttribute('data-edit')) {
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
      button.addEventListener('click',editButtonHandler);
    });

