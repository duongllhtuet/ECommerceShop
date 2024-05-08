const express = require("express");
const router = express.Router();

const UserController = require("../app/controllers/userController");

router.get("/singup", UserController.renderSignupPage);
router.post("/singup", UserController.handleSignup);

router.get("/purchase", UserController.renderPurchasePage);

router.get("/profile", UserController.renderProfilePage);

router.post("/post", UserController.updateProfile);

router.get("/login", UserController.renderLoginPage);
router.post("/login", UserController.handleLogin);

module.exports = router;