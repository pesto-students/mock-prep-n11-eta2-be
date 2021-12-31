const express = require('express')
var router = express.Router()
const signinController = require("../controller/auth")

router.use(async (req, res, next) => {
    next()
})

router.post("/", signinController)
module.exports = router 