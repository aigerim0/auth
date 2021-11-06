const express = require("express")
const {googleLogin} = require("../controllers/auth");
const {signin, signup,authenticate,getUserInfo} = require("../controllers/auth")
const router = express.Router()

router.get("/user/:id",getUserInfo )
router.post("/signup",signup )
router.post("/signin",signin )
router.post("/google-login",googleLogin )
router.get("/authentication",authenticate)


module.exports = router