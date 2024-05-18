import express from "express"
import { loginUser, registerUser, getUser, modifyUser} from "../controllers/userController.js"
import authMiddleware from "../middleware/auth.js"
import multer from 'multer'

const userRouter = express.Router()

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`) // use this method, our filename will become unique
    }
})

const upload = multer({storage: storage})

userRouter.post("/register",registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/get", authMiddleware, getUser)
userRouter.put("/modify", upload.single("image") ,authMiddleware, modifyUser)

export default userRouter;