const express = require("express");
const router = express.Router();

const loginController = require("../../../app/controllers/loginController.js");

router.get("/login", loginController.renderLoginPage);

router.post("/login", loginController.handleLogin);

module.exports = router;
