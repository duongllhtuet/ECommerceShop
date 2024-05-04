const express = require("express");
const router = express.Router();

const singUpController = require("../../../app/controllers/signUpController.js");

router.get("/singup", singUpController.renderSignupPage);

router.post("/singup", singUpController.handleSignup);

module.exports = router;
