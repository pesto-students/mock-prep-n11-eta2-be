const express = require('express')
var router = express.Router()
const ResourceController = require("../controller/Resource")

router.get("/", (req, res) => { res.send("Resource Api")})

router.get("/getResources", ResourceController.find)
router.post("/addResource", ResourceController.create)
router.get("/getResource/:id", ResourceController.findOne)
router.post("/updateResource/:id", ResourceController.update)
router.delete("/deleteResource/:id", ResourceController.delete)

module.exports = router 