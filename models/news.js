const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user:{
type: mongoose.Schema.Types.ObjectId, ref: "users"
    }
},{timestamps: true})

module.exports = mongoose.model("news",newsSchema)