const express = require("express")
const router = require("./routes/moviesRoute")

const app = express()
app.use(router)

module.exports = app