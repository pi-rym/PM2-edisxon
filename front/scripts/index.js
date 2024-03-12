console.log("vinculado el js")



const transformer = require("./tranformer")

$.get("https://students-api.up.railway.app/movies", (data) => {
    
    
    data.forEach(movie => transformer(movie))
})