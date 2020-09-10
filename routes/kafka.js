const express = require("express");
const router = express.Router();
const kafkaController = require("../app/api/controllers/kafka");

router.get("/", kafkaController.create);

module.exports = router;
