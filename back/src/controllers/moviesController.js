
const moviesService = require("../services/moviesService")

const moviesController = async (req, res) => {
    try {
        const movies = await moviesService.getMovies()
        res.json(movies)
    } catch (error) {
        res.status(500).send("ha ocurrido un error")
    }
    
}

module.exports = {
    moviesController,
}