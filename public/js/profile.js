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
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector('.form-post')
    .addEventListener('submit', newPost);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  