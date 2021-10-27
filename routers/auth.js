const express = require("express")
const {signin, signup,authenticate} = require("../controllers/auth")
const router = express.Router()

router.post("/signup",signup )


router.post("/signin",signin )
router.post("/authentication",authenticate)


module.exports = router