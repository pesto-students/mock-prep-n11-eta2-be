const express = require('express')
var router = express.Router()
const TopicController = require("../controller/topic")

router.get("/getData", TopicController.find)
router.post("/addData", TopicController.create)
router.get("/getData/:id", TopicController.findOne)
router.post("/updateData/:id", TopicController.update)
router.delete("/deleteData/:id", TopicController.delete)

module.exports = router 