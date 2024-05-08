const bcrypt = require('bcrypt');
const User = require('../models/userModel');

class UserController
{
    async renderSignupPage(req, res) {
        try {
            res.render("../../resources/views/user/signup");
        } catch (error) {
            console.error("Error rendering signup page:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    async handleSignup(req, res) {
        try {
            if (req.body.confirm_password === req.body.password) {
                const existingUser = await User.findOne({ email: req.body.email });
                if (existingUser) {
                    return res.send("Email này đã được sử dụng");
                }

                const hashedPassword = await bcrypt.hash(req.body.password, 10); // Sử dụng bcrypt để băm mật khẩu
                const newUser = new User({
                    email: req.body.email,
                    password: hashedPassword,
                    name: "",
                    phoneNumber: req.body.phoneNumber,
                    address: "",
                    picture: "",
                    purchase: [],
                });

                await newUser.save(); // Lưu người dùng mới vào cơ sở dữ liệu
                res.redirect("/login");
            } else {
                res.send("Xác nhận mật khẩu không đúng");
            }
        } catch (error) {
            console.error("Error handling signup:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    async renderPurchasePage(req, res) {
        try {
          res.render("../../resources/views/user/login");
        } catch (error) {
          console.error("Error rendering login page:", error);
          res.status(500).send("Internal Server Error");
        }
    }

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

module.exports = new UserController();