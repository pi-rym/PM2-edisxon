const app = require("./src/server")
const dbCon = require("./src/config/dbCon")

dbCon().then(res  => {
        app.listen(3001, () => {
            
            console.log("andamos escuchando")
        })
    }
)

