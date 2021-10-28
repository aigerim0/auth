const express = require("express")
const {signin, signup,authenticate,getUserInfo} = require("../controllers/auth")
const router = express.Router()

router.get("/user/:id",getUserInfo )
router.post("/signup",signup )
router.post("/signin",signin )
router.post("/authentication",authenticate)


module.exports = router