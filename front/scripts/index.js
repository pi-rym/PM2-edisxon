console.log("vinculado el js")
let tempData

//import tempData from "./tempData";
const cards = document.getElementById("cards")

function transformer (movie) {
    const {title, year, director, duration, genre, rate, poster} = movie
    const titleElement = document.createElement("h3")
    const yearElement = document.createElement("h2")
    const directorElement = document.createElement("h2")
    const durationElement = document.createElement("h2")
    const genreElement = document.createElement("h2")
    const rateElememt = document.createElement("h2")
    const posterElement = document.createElement("img")
    const cardElement = document.createElement("div")

    titleElement.innerHTML = title
    yearElement.innerHTML = "Release date: " + year
    directorElement.innerHTML = "Director: " + director
    rateElememt.innerHTML = "Raiting: " + rate
    posterElement.src = poster

    titleElement.classList.add("content")
    yearElement.classList.add("content")
    directorElement.classList.add("content")
    rateElememt.classList.add("content")
    posterElement.classList.add("poster")
    cardElement.classList.add("a")

    cardElement.appendChild(titleElement)
    cardElement.appendChild(posterElement)
    cardElement.appendChild(yearElement)
    cardElement.appendChild(directorElement)
    cardElement.appendChild(rateElememt)
    cards.appendChild(cardElement)

}

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
    tempData = data
    console.log(tempData)
    tempData.forEach(movie => transformer(movie))
})