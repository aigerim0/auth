const express = require("express")
const {getAllNews} = require("../controllers/news");
const {createPost} = require("../controllers/news");
const {getOneNews} = require("../controllers/news");
const verify = require("../middleware/authVerify")
const router = express.Router()


router.get("/", verify,getAllNews )
router.get("/:id",getOneNews)
router.post("/",createPost )



module.exports = router