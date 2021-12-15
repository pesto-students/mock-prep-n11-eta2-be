const express = require('express')
var router = express.Router()
const PricingController = require("../controller/Pricing")

router.get("/getPricings", PricingController.find)
router.post("/addPricing", PricingController.create)
router.get("/getPricing/:id", PricingController.findOne)
router.post("/updatePricing/:id", PricingController.update)
router.delete("/deletePricing/:id", PricingController.delete)

module.exports = router 