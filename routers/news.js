const express = require("express")
const {getAllNews} = require("../controllers/news");
const {createPost} = require("../controllers/news");
const router = express.Router()

router.get("/",getAllNews )
router.post("/",createPost )



module.exports = router