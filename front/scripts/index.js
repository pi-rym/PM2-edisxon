console.log("vinculado el js")



const axios = require('axios')
const transformer = require("./tranformer")

axios.get("http://localhost:3001/movies")

  .then(response => {
    const data = response.data
    data.forEach(movie => transformer(movie))
  })
  .catch(error => {
    alert("Error al obtener los datos: " + error.message)
  })