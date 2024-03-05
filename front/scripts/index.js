console.log("vinculado el js")

const tempData = [
    {
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      director: "James Gunn",
      duration: "2h 16min",
      genre: ["Action", "Adventure", "Comedy"],
      rate: 7.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      director: "George Lucas",
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      rate: 8.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      director: "Peter Jackson",
      duration: "2h 58min",
      genre: ["Action", "Adventure", "Drama", "Fantasy"],
      rate: 8.8,
      poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
  ];

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
const transformed = tempData.map(movie => transformer(movie))
