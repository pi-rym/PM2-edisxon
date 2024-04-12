const mongoose = require("mongoose")

const dbCon = async () => {
    await mongoose.connect(
        "mongodb+srv://edisxon10:Edisxon-20@m2cluster.fgbjgdr.mongodb.net/M2?retryWrites=true&w=majority&appName=M2Cluster"
    )
}

module.exports = dbCon