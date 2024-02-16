console.log('hello world FUNCTION')


const inputField = document.querySelector('input')

const moviesList = document.querySelector('ul')
const formSubmit = document.querySelector("form")
const message = document.querySelector('#message')

let newMovie = ''

function newMovieInput(e){
    console.log('newMovie', newMovie)
    newMovie = e.target.value
}

function deleteMovie(event) {
    console.log("delete")
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}
function crossOffMovie(event) {
    console.log("cross off")
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = "Movie watched!"
        } else {
        message.textContent ='Movie added back!'
        }
    }


function addMovie(event) {
    event.preventDefault()
    console.log('addMovie')
    const movieTitle = document.createElement('span')
    const movie = document.createElement('li');
    const deleteBtn = document.createElement('button')
    movieTitle.textContent = newMovie
    movie.appendChild(movieTitle)
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    movieTitle.addEventListener("click", crossOffMovie)
    moviesList.appendChild(movie)
    inputField.value = ""
}



inputField.addEventListener("change", newMovieInput)
formSubmit.addEventListener("submit", addMovie);