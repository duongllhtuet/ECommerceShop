const bcrypt = require('bcrypt');
const User = require('../models/user');

class SingUpController
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
}

module.exports = new SingUpController();