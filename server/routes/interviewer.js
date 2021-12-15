const express = require('express')
var router = express.Router()
const interviewerController = require("../controller/interiewer")

router.get("/getInterviewers", interviewerController.find)
router.post("/addInterviewer", interviewerController.create)
router.get("/getInterviewer/:id", interviewerController.findOne)
router.post("/updateInterviewer/:id", interviewerController.update)
router.delete("/deleteInterviewer/:id", interviewerController.delete)

module.exports = router 