
const moviesService = require("../services/moviesService")

const moviesController = async (req, res) => {
    try {
        const movies = await moviesService.getMovies()
        res.json(movies)
    } catch (error) {
        res.status(500).send("ha ocurrido un error")
    }
    
}

const newMovie = async (req, res) => {
    try {
        const newOne = await moviesService.createMovie(req.body)
        res.status(201).json(newOne)
        
    } catch (error) {
        res.status(500).send("ha ocurrido un error")
    }
}

module.exports = {
    moviesController,
    newMovie
}