const express = require("express");
const router = express.Router();

const profileController = require("../../../app/controllers/profileController.js");

router.get("/profile", profileController.renderProfilePage);

router.post("/post", profileController.updateProfile);

module.exports = router;
