// Variables
const searchButton = document.querySelector('#btn-search');
const btnSubmit = document.querySelector('.btn-submit');
const errorMessage = document.querySelector('.modal-err ');

// Start search
searchButton.addEventListener('click', function (event) {
    let searchText = document.querySelector('#input-search-text').value;
    getMovie(searchText);
    event.preventDefault();
})

// Search for movie and get data 
function getMovie(searchText) {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ca2803b5&s=${searchText}&plot&i`)
            .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movies = data.Search;
            console.log(movies);
            for (let i = 0; i < movies.length; i++) {
                let title = movies[i].Title;
                localStorage.setItem('movieId', title);
                let titleForAttribute = title.replace(/["" & :]/g, '-');
                let parent = document.querySelector('.main');
                parent.innerHTML += `
                <article class="flex-column box mt-3">
                <p class="text-white" >${movies[i].Title}</p>
                    <p class="text-white" >${movies[i].Year}</p>
                    <figure>
                    <img src="${movies[i].Poster} alt="${"Poster for"}${movies[i].Title}"></figure> 
                    <a href="http://imdb.com/title/${movies[i].imdbID}" target="_blank" class="btn btn-primary text-center">View IMDB</a>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn mt-1 buttons btn-secondary" id=${titleForAttribute} data-title = ${titleForAttribute}>Add review</button>
                </article>`
            }
        })
        .catch((err) => {
            showError(err);
        });

}
 
// Create new review
const newReview = async (event) => {
    event.preventDefault();
    const title = event.target.getAttribute('data-title');
    console.log(title);
    const blog_title = document.querySelector('#review-title').value.trim();
    const blog_content = document.querySelector('#review-cotent').value.trim();
  if (blog_title && blog_content) {
      const response = await fetch(`/api/movie`, {
        method: 'POST',
        body: JSON.stringify({ blog_title, blog_content}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/movie');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  document
    .querySelector('.btn-submit')
    .addEventListener('click', newReview);

//  Shows movie by default
 document.addEventListener('DOMContentLoaded', (event) => {
            fetch(`https://www.omdbapi.com/?apikey=ca2803b5&s=thor`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    let movies = data.Search;
                    document.querySelector('.title-movie').textContent =`${ movies[2].Title}`;
                    document.querySelector('.poster').src = movies[2].Poster;
                    document.querySelector('.id-movie').href = `http://imdb.com/title/${movies[2].imdbID}`;
                })
                .catch((err) => {
                  console.log("error");
                });
 });