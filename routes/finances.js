const express = require("express");
const router = express.Router();
const financeController = require("../app/api/controllers/finances");

router.get("/", financeController.getAll);
router.post("/", financeController.create);
router.post("/getByLoanNumber", financeController.getByLoanNumber);
router.post("/getByLoanCreditor", financeController.getByLoanCreditor);
router.get("/:financeId", financeController.getById);
router.put("/:financeId", financeController.updateById);
router.delete("/:financeId", financeController.deleteById);

module.exports = router;
