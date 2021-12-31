const express = require('express')
var router = express.Router()
const ResourceController = require("../controller/resource")

router.get("/getData", ResourceController.find)
router.post("/addResource", ResourceController.create)
router.get("/getResource/:id", ResourceController.findOne)
router.post("/updateResource/:id", ResourceController.update)
router.delete("/deleteResource/:id", ResourceController.delete)

module.exports = router 