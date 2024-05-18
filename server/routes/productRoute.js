import express from 'express'
import { addProduct, listProduct, removeProduct, getProductById, addComment } from '../controllers/productController.js'
import authMiddleware from "../middleware/auth.js"
import multer from 'multer'


const foodRouter = express.Router();

// Image Storage Engine: where to storage food image
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`) // use this method, our filename will become unique
    }
}) 

const upload = multer({storage: storage})

// modify router
foodRouter.post("/add",upload.single("image"),addProduct)
foodRouter.get('/list',listProduct)
foodRouter.post('/remove',removeProduct);
foodRouter.get('/:id', getProductById);
foodRouter.post("/:id", authMiddleware, addComment)


export default foodRouter;
