const express = require('express')
var router = express.Router()
const TopicController = require("../controller/Topic")

router.get("/getTopics", TopicController.find)
router.post("/addTopic", TopicController.create)
router.get("/getTopic/:id", TopicController.findOne)
router.post("/updateTopic/:id", TopicController.update)
router.delete("/deleteTopic/:id", TopicController.delete)

module.exports = router 