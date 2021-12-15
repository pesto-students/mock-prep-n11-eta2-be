const express = require('express')
var router = express.Router()
const studentController = require("../controller/Student")

router.get("/getStudents", studentController.find)
router.post("/addStudent", studentController.create)
router.get("/getStudent/:id", studentController.findOne)
router.post("/updateStudent/:id", studentController.update)
router.delete("/deleteStudent/:id", studentController.delete)

module.exports = router 