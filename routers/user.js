const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// routes
router.get('/profile', async (req, res) => {
    try {
        res.render('user/profile',)
    } catch (error) {
        console.log('Error rendering index:', error);
    }
})

router.get('/purchase', async (req, res) => {
    try {
        const data = req.session.user    
        res.render('user/purchase', { data })
    } catch (error) {
        console.log('Error rendering index:', error);
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('user/login',)
    } catch (error) {
        console.log('Error rendering index:', error);
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) {
            res.send("Không tìm thấy tài khoản")
        }
        const checkPassword = await User.findOne({email: req.body.email, password: req.body.password})
        if (!checkPassword) {
            res.send("Sai mật khẩu")
        } else {
            req.session.user = user;
            res.redirect('/')
        }
    } catch (error) {
        console.log('Error rendering index:', error);
    }
})



router.get('/signup', async (req, res) => {
    try {
        res.render('user/signup',)
    } catch (error) {
        console.log('Error rendering index:', error);
    }
})

router.post('/signup', async (req, res) => {
    try {
        if (req.body.confirm_password == req.body.password) {
            const data = new User({
                email: req.body.email,
                password: req.body.password,
                name: "",
                phoneNumber: req.body.phoneNumber,
                address: "",
                picture: "",
                purchase: [],
            })

            const existingUser = await User.findOne({email: data.email})
            if (existingUser) {
                res.send("Email này đã được sử dụng")
            } else {
                // const saltRounds = 10
                // const hashedPassword = await bcrypt.hash(data.password, saltRounds)

                // data.password = hashedPassword
                
                const newUser = await User.insertMany(data)
                res.redirect('/user/login')
            }
        } else {
            res.send('Xác nhận mật khẩu bị sai');
        }
    } catch (error) {
        console.log('Error rendering index:', error);
    }
})

module.exports = router;
