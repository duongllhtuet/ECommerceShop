const bcrypt = require('bcrypt');
const User = require('../models/user'); 

class LoginController {
  async renderLoginPage(req, res) {
    try {
      res.render("../../resources/views/user/login");
    } catch (error) {
      console.error("Error rendering login page:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  async handleLogin(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).send("Không tìm thấy tài khoản");
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).send("Sai mật khẩu");
      }

      req.session.user = user;
      res.redirect("/");
    } catch (error) {
      console.error("Error handling login:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new LoginController();