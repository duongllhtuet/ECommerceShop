import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

const loginUser = async (req, res) => {
  const {email,password} = req.body;
  try {
      const user = await userModel.findOne({email});

      if (!user) {
          return res.json({success:false,message:"User doesn't exists"});
      }

      const isMatch = await bcrypt.compare(password,user.password)

      if (!isMatch) {
          return res.json({success:false, message:"Invalid password"})
      }

      const token = createToken(user._id);
      res.json({success:true, token})
  } catch (error) {
      console.log(error);
      res.json({success:false, message:"Error"})
  }
}

const createToken = (id) => {
  return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async (req, res) => {
  const {name, password, email, phone} = req.body;
  try {
      // checking is user already exists
      const exists = await userModel.findOne({email});
      if (exists) {
          return res.json({success:false,message:"User already exists"})
      }

      // validating email format $ strong password
      if (!validator.isEmail(email)) {
          return res.json({success:false,message:"Please enter a valid email"})
      }

      if (password.length<8) {
          return res.json({success:false,message:"Please enter a strong password"})
      }

      if (password.phone<10) {
        return res.json({success:false,message:"Please enter a valid phone number"})
      }

      // hashing user password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password,salt);

      const newUser = new userModel({
          name: name,
          email:email,
          password:hashedPassword,
          phoneNumber: phone,
      })

      const user = await newUser.save()
      const token = createToken(user._id)
      res.json({success:true,token});

  } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
  }
}

const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.userId);
        res.json({success:true, data:user})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: 'Error'})
    }
};

const modifyUser = async (req, res) => {
    let image_filename = "";
    if (req.file) {
        image_filename = req.file.filename;
    }

    try {
        const user = await userModel.findById(req.body.userId);
        user.name = req.body.name
        user.email = req.body.email
        user.phoneNumber = req.body.phone
        if (req.file) {
            user.picture = image_filename;
        }
        await user.save();
        res.json({success:true, message:'Thông tin đã thay đổi'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: 'Error'})
    }
}

export {loginUser, registerUser, getUser, modifyUser}