const express = require("express");
const router = express.Router();

const homeController = require("../app/controllers/homeController");

router.get("/", homeController.renderHomePage);

module.exports = router;