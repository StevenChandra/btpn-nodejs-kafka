const express = require("express");
const router = express.Router();
const movieController = require("../app/api/controllers/vehicles");

router.get("/", movieController.getAll);
router.post("/", movieController.create);
router.get("/:vehicleId", movieController.getById);
router.put("/:vehicleId", movieController.updateById);
router.delete("/:vehicleId", movieController.deleteById);

module.exports = router;
