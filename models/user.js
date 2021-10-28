const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 26,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true,
        lowercase:true
    },
    password: {
        type: String,
        required: true,
        max: 26,
        trim: true
    },
    role : {
        type: String,
        default: "user"
    },
    news: [{type:mongoose.Schema.Types.ObjectId, ref: "news"}]
},{timestamps: true})


userSchema.pre("save", async function (next){
    const user = this
    user.password = await bcrypt.hash(user.password,10)
    next()
})

userSchema.methods.authenticate = function (password){
    const user = this
    return bcrypt.compare(password, user.password)
}

module.exports = mongoose.model("users",userSchema)

