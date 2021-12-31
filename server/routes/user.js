const express = require('express')
var router = express.Router()
const userController = require("../controller/user")

router.get("/getData", userController.find)
router.post("/addData", userController.create)
router.get("/getData/:id", userController.findOne)
router.post("/updateData/:id", userController.update)
router.delete("/deleteData/:id", userController.delete)
router.post('/loginUser',userController.findOneUser)

module.exports = router 