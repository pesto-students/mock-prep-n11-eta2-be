const express = require('express')
var router = express.Router()
const QuizController = require("../controller/quiz")

router.get("/getData", QuizController.find)
router.get("/getData/:id", QuizController.findOne)
router.post("/addData", QuizController.create)
router.post("/updataData/:id", QuizController.update)
router.delete("/deleteData/:id", QuizController.delete)

module.exports = router 