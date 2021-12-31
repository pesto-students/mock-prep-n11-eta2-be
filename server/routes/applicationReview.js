const express = require('express')
var router = express.Router()
const AppReviewController = require("../controller/appReview")

router.get("/getData", AppReviewController.find)
router.post("/addData", AppReviewController.create)
router.get("/getData/:id", AppReviewController.findOne)
router.post("/updateData/:id", AppReviewController.update)
router.delete("/deleteData/:id", AppReviewController.delete)

module.exports = router 
