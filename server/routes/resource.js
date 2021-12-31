const express = require("express");
var router = express.Router();
const ResourceController = require("../controller/resource");

router.get("/getData", ResourceController.find);
router.post("/addData", ResourceController.create);
router.get("/getData/:id", ResourceController.findOne);
router.post("/updateData/:id", ResourceController.update);
router.delete("/deleteData/:id", ResourceController.delete);

module.exports = router;
