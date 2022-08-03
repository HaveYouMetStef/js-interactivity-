let message = document.querySelector('#message')

const form = document.querySelector('form')
form.addEventListener('submit', addMovie)

////////////////functions/////////////////
function addMovie (event) {
    event.preventDefault();
    let inputField = document.querySelector('input')
    let movie = document.createElement('li') 
    
    let movieTitle = document.createElement('span')
    const list = document.querySelector('ul')
    const deleteBtn = document.createElement('button')
    
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    list.appendChild(movie)
    deleteBtn.textContent = 'X'
    
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)
    
    inputField.value = ''

    movieTitle.addEventListener('click', crossOffMovie)
}

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
        if (event.target.classList.contains('checked') === true) {
        return message.textContent = 'Movie watched'
        } else {
            return message.textContent = 'Movie added back!'
        }
}






