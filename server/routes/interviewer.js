const express = require('express')
var router = express.Router()
const InterviewerController = require("../controller/interviewer")

router.get("/getData", InterviewerController.find)
router.post("/addData", InterviewerController.create)
router.get("/getData/:id", InterviewerController.findOne)
router.post("/updateData/:id", InterviewerController.update)
router.delete("/deleteData/:id", InterviewerController.delete)

module.exports = router 