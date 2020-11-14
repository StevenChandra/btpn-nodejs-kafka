const express = require("express");
const router = express.Router();
const financeController = require("../app/api/controllers/finances");

router.get("/", vehicleController.getAll);
router.post("/", vehicleController.create);
router.post("/getByAccountNumber", vehicleController.getByAccountNumber);
router.post("/getByIdentityNumber", vehicleController.getByIdentityNumber);
router.get("/:vehicleId", vehicleController.getById);
router.put("/:vehicleId", vehicleController.updateById);
router.delete("/:vehicleId", vehicleController.deleteById);

module.exports = router;
