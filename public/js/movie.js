// Variables
const searchButton = document.querySelector('#btn-search');
const modal = document.querySelector('.modal');
const errorMessage = document.querySelector('.modal-err ');
const closeMessageBox = document.querySelector('.delete');
const closeModal = document.querySelector('.modal-close');
// const mainEl = $('.main');
// const deleteButton = $('.list-buttons');
let movieId = localStorage.getItem('movieId');

// Start search
searchButton.addEventListener('click', function (event) {
    let searchText = document.querySelector('#input-search-text').value;
    getMovie(searchText);
    event.preventDefault();
})

// Search for movie and get data 
function getMovie(searchText) {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ca2803b5&s=${searchText}&plot`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let movies = data.Search;
            let parent = document.querySelector('.slide-movie');
            for (let i = 0; i < movies.length; i++) {
                let title = movies[i].Title;
                let titleForAttribute = title.replace(/["" & :]/g, '-');
                parent.innerHTML += `
                    <div class="carousel-item">
                        <img src="${movies[i].Poster}" class="img-fluid"" alt="${"Poster for"}${movies[i].Title}">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${movies[i].Title}</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            <a href="http://imdb.com/title/${movies[i].imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                        </div>
                    </div>
                `;
            }
            // Add active class to first slide
            parent.querySelector('.carousel-item:first-child').classList.add('active');
        })
        .catch((err) => {
            // showError(err);
        });
    document.querySelector(".slide-movie").innerHTML = '';
}


// Show error message
// function showError() {
//     errorMessage.classList.toggle('is-active');
// }
// closeMessageBox.addEventListener('click', showError);

// Show modal
// function showModal() {
//     modal.classList.toggle('is-active');
// }
// closeModal.addEventListener('click', showModal);

// Datepicker widget
// $(function () {
//     $('#datepicker').datepicker({
//         changeMonth: true,
//         changeYear: true,
//     });
// });



// Create buttons
// mainEl.on('click', '.buttons', function () {
//     printDate();
// });

// let printDate = function () {
//     let selectDate = document.querySelector('.input-date').value;
//     modal.classList.toggle('is-active');
//     localStorage.setItem('date', selectDate);
//     let selected = event.target;
//     localStorage.setItem('movie', selected.id);
// }

// Create buttons
// function movieSelected() {
//     let listOfButtons = document.querySelector('.list-buttons');
//     let list = document.createElement('li');
//     let btn = document.createElement('button');
//     let date = document.querySelector('.input-date').value;
//     localStorage.setItem('date', date);
//     btn.classList.add('is-info', 'button', 'is-small');
//     list.classList.add('is-flex','is-justify-content-space-between','is-info','is-align-items-center','is-align-content-center');
//     list.setAttribute('id', movieId);
//     let dataTitle = localStorage.getItem('movie').replace(/["" -- - & :]/g, ' ');
//     let movieSeenOn = localStorage.getItem('date');
//     list.innerHTML = `${dataTitle} ${movieSeenOn}`;
//     btn.setAttribute('id',localStorage.getItem('id'));
//     btn.textContent = "❌";
//     listOfButtons.appendChild(list);
//     list.appendChild(btn);
//     localStorage.clear();
//     modal.classList.toggle('is-active');
// }
// document.querySelector('.btn-submit').addEventListener('click', movieSelected);



//  Shows movie by default
//  document.addEventListener('DOMContentLoaded', (event) => {
//             fetch(`https://www.omdbapi.com/?apikey=ca2803b5&s=thor`)
//                 .then(function (response) {
//                     return response.json();
//                 })
//                 .then(function (data) {
//                     let movies = data.Search;
//                     // document.querySelector('.heading').textContent =`${'Upcoming movie'}`;
//                     document.querySelector('.title-movie').textContent =`${ movies[2].Title}`;
//                     // document.querySelector('.subtitle-movie').textContent = `${'Year'} ${movies[2].Year}`;
//                     document.querySelector('.poster').src = movies[2].Poster;
//                     document.querySelector('.id-movie').href = `http://imdb.com/title/${movies[2].imdbID}`;
//                 })
//                 .catch((err) => {
//                 //   console.log("error");
//                 });
//  });

//  Delete list of movies
// function handleRemoveItem() {
//    let btnClicked = $(event.target);
//     btnClicked .parent('li').remove();
// }
// deleteButton.on('click', '.is-small', function () {
//     handleRemoveItem();
// })
 
// Burger menu 
// document.querySelector('#burger').addEventListener('click', () => {
//     document.querySelector('.navbar-menu').classList.toggle('is-active');
// })