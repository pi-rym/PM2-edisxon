console.log("vinculado el js")



const transformer = require("./tranformer")

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
    
    
    data.forEach(movie => transformer(movie))
})