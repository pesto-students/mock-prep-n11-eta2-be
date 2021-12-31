const express = require('express')
var router = express.Router()
const InterviewsController = require("../controller/interviews")

router.get("/getData", InterviewsController.find)
router.post("/addData", InterviewsController.create)
router.get("/getData/:id", InterviewsController.findOne)
router.post("/updateData/:id", InterviewsController.update)
router.delete("/deleteData/:id", InterviewsController.delete)

module.exports = router 