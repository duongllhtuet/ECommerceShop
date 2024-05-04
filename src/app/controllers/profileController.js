const bcrypt = require("bcrypt");
const User = require("../models/user");

class ProfileController {
  async renderProfilePage(req, res) {
    try {
      res.render("../../resources/views/user/profile");
    } catch (error) {
      console.error("Error rendering profile page:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  async updateProfile(req, res) {
    try {
      const { name, phoneNumber, address, picture } = req.body;
      
      const userId = req.session.user._id;
      
      await User.findByIdAndUpdate(userId, { name, phoneNumber, address, picture });

      res.redirect("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new ProfileController();
