const express = require('express')
var router = express.Router()
const studentController = require("../controller/student")

router.get("/getData", studentController.find)
router.post("/addData", studentController.create)
router.get("/getData/:id", studentController.findOne)
router.post("/updateData/:id", studentController.update)
router.delete("/deleteData/:id", studentController.delete)

module.exports = router 