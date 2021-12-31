const express = require('express')
var router = express.Router()
const StudentQueryController = require("../controller/studentquery")

router.get("/", (req, res) => { res.send("Resource Api")})

router.get("/getData", StudentQueryController.find)
router.post("/addData", StudentQueryController.create)
router.get("/getData/:id", StudentQueryController.findOne)
router.post("/updateData/:id", StudentQueryController.update)
router.delete("/deleteData/:id", StudentQueryController.delete)

module.exports = router 