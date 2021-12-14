const express = require('express')
var router = express.Router()
const userController = require("../controller/User")

router.get("/", (req, res) => { res.send("User Api")})

router.get("/getUsers", userController.find)
router.post("/addUser", userController.create)
router.get("/getUser/:id", userController.findOne)
router.post("/updateUser/:id", userController.update)

module.exports = router 