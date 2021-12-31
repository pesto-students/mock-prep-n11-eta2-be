const express = require('express')
var router = express.Router()
const PricingController = require("../controller/pricing")

router.get("/getData", PricingController.find)
router.post("/addData", PricingController.create)
router.get("/getData/:id", PricingController.findOne)
router.post("/updateData/:id", PricingController.update)
router.delete("/deleteData/:id", PricingController.delete)

module.exports = router 