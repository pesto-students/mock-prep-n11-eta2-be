const express = require('express')
var router = express.Router()
const appReviewController = require("../controller/AppReview")

router.get("/getReviews", appReviewController.find)
router.post("/addReview", appReviewController.create)
router.get("/getReview/:id", appReviewController.findOne)
router.post("/updateReview/:id", appReviewController.update)
router.delete("/deleteReview/:id", appReviewController.delete)

module.exports = router 
