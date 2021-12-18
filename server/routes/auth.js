const express = require('express')
var router = express.Router()
const signinController = require("../controller/auth")
const UserDb = require("../model/user")


router.use(async (req, res, next) => {
    console.log(req.body);
    next()
})

router.post("/", signinController)


module.exports = router 