

const {Router} = require("express")
const {moviesController, newMovie} = require("../controllers/moviesController")
const router = Router()


router.get("/movies", moviesController)
router.post("/movies", newMovie)
module.exports = router