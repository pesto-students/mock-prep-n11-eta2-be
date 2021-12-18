const express = require('express')
var router = express.Router()
const AdminDashboardController = require("../controller/adminDashboard")

router.get("/getData", AdminDashboardController.find)
router.post("/addData", AdminDashboardController.create)
router.get("/getData/:id", AdminDashboardController.findOne)
router.post("/updateData/:id", AdminDashboardController.update)
router.delete("/deleteData/:id", AdminDashboardController.delete)

module.exports = router 
