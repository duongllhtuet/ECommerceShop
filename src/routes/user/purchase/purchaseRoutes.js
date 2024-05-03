const express = require("express");
const router = express.Router();

const purchaseController = require("../../../app/controllers/purchaseController.js");

router.get("/purchase", purchaseController.renderPurchasePage);

module.exports = router;
