const express = require("express");
const router = express.Router();

const groceryController = require("../../app/controllers/groceryController");

router.get("/", groceryController.getAllGroceries);

router.get(":id", groceryController.getGroceryById);

module.exports = router;
