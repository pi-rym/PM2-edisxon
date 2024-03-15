const axios = require("axios")

const moviesFunction = async () => {
    try {
        const response = await axios.get("https://students-api.up.railway.app/movies")
        return response.data
    } catch (error) {
        throw new Error("Error al obtener los datos: " + error.message)
    }
}

module.exports = {
    moviesFunction,
};
