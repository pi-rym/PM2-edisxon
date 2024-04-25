const axios = require("axios")

const formulario = document.getElementById("formulario")
const clearButton = document.getElementById("clearButton")

clearButton.addEventListener("click", function(){
    formulario.reset()
})

const rateInput = document.getElementById('rate');
const rateValueOutput = document.getElementById('rateValue');

rateInput.addEventListener('input', function() {
    rateValueOutput.textContent = rateInput.value;
});



formulario.addEventListener("submit", function(){
    event.preventDefault()

    const name = document.getElementById("name").value
    const year = document.getElementById("year").value
    const director = document.getElementById("director").value
    const duration = document.getElementById("duration").value
    const genre = document.getElementById("genre").value
    const rate = document.getElementById("rate").value
    const poster = document.getElementById("poster").value

    const movieData = {
        title: name,
        year: year,
        director: director,
        duration: duration,
        genre: genre,
        rate: rate,
        poster: poster
    }

    axios.post('http://localhost:3001/movies', movieData)
        .then(response => {
            console.log('La película ha sido creada:', response.data)
            alert("the movie has been sended to the data base")
            formulario.reset()
        })
        .catch(error => {
            console.error('Error al crear la película:', error)
    })
   
})