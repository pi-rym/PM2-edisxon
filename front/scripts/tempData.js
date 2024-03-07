const colombia = [
  {
    title: "La vendedora de rosas",
    year: 1998,
    director: "Victor Gaviria",
    rate: 7.4,
    poster:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRVz6hLwmXTclQAt6SCtmCSigMONeP75muqoMwBeWxOvAJZQm_g",
  },
  {
    title: "Rodrigo D. No Futuro",
    year: 1990,
    director: "Victor Gaviria",
    rate: 6.9,
    poster:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5MkERngqe5RG8AGpeEnjSFzJ_2GVSQQI__OzZfqTzgcruCBSv",
  },
  {
    title: "Los nadie",
    year: 2016,
    director: "Juan Sebastian Mesa",
    rate: 6.7,
    poster:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRr3BNahh16dhBgZJeqUFREaiOGBwmbEtOeV_Eh7x7NvwvCGegQ",
  },
];
const container = document.getElementById("container")

function transformer (movie) {
    const {title, year, director, rate, poster} = movie
    const titleElement = document.createElement("h5")
    const yearElement = document.createElement("h3")
    const directorElement = document.createElement("h3")
    const rateElememt = document.createElement("h3")
    const posterElement = document.createElement("img")
    const cardElement = document.createElement("div")
    const cardElement2 = document.createElement("div")
    const botonElement = document.createElement("button")

    titleElement.innerHTML = title
    yearElement.innerHTML = "Release date: " + year
    directorElement.innerHTML = "Director: " + director
    rateElememt.innerHTML = "Raiting: " + rate
    posterElement.src = poster
    botonElement.innerHTML = "Watch now"

    posterElement.classList.add("poster")
    titleElement.classList.add("titulo")
    yearElement.classList.add("content")
    directorElement.classList.add("content")
    rateElememt.classList.add("content")
    cardElement.classList.add("card")
    cardElement2.classList.add("card-body")
    botonElement.classList.add("btn")
    botonElement.classList.add("btn-danger")

    cardElement2.appendChild(titleElement)
    cardElement.appendChild(posterElement)
    cardElement2.appendChild(yearElement)
    cardElement2.appendChild(directorElement)
    cardElement2.appendChild(rateElememt)
    cardElement2.appendChild(botonElement)
    cardElement.appendChild(cardElement2)
    container.appendChild(cardElement)

}

colombia.forEach(movie => transformer(movie))