const express = require('express')
var router = express.Router()
const QuizController = require("../controller/quiz")


router.get("/getQuizLists", QuizController.find)
router.get("/getQuizList/:id", QuizController.findOne)
router.post("/addQuizList", QuizController.create)
router.post("/updateQuizList/:id", QuizController.update)
router.delete("/deleteQuizList/:id", QuizController.delete)

module.exports = router 