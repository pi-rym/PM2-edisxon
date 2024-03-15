const {moviesFunction} = require("../services/serviceMovies")

const moviesController = async (req, res) => {
    try {
        const movies = await moviesFunction()
        res.json(movies)
    } catch (error) {
        res.status(418)
        
    }
    
    
}

module.exports = {
    moviesController,
}