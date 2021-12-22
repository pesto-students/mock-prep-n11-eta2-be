const express = require('express')
var router = express.Router()
const DashboardController = require("../controller/query")

router.get("/getData", DashboardController.find)
router.post("/addData", DashboardController.create)
router.get("/getData/:id", DashboardController.findOne)
router.post("/updateData/:id", DashboardController.update)
router.delete("/deleteData/:id", DashboardController.delete)

module.exports = router 