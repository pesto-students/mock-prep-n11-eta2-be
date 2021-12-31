const express = require('express')
var router = express.Router()
const RazorpayController = require("../controller/razorpay")

router.get("/", (req, res) => { res.send("razorpay Api")})
router.post("/createOrder", RazorpayController.order)

module.exports = router 