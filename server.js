const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const chalk = require("chalk")
require("dotenv").config()
const  authPouter = require("./routers/auth")


const server = express()
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(chalk.blue("DB IS CONNECTED")))
    .catch(() => console.log(chalk.red("DB IS NOT CONNECTED")))



server.use(cors())
server.use(express.json())


server.use("/api/v1/", authPouter)

const port = 8080

server.listen(port, () => {
    console.log(chalk.magenta(`Server is started on the ${port}`))
})