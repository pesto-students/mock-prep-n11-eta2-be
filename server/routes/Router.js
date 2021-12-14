const express = require('express')
var router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to Mock Prep")
})

module.exports = router