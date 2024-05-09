import productModel from "../models/productModel.js";
import fs from 'fs'

// add product to database
const addProduct = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const product = new productModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        sex: req.body.sex,
        category: req.body.category,
        picture: image_filename
    })
    try {
        await product.save();
        res.json({success:true, message:'Product Added'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:'Error'})
    }
}

// all food list
const listProduct = async (req, res) => {
    try {
        const foods = await productModel.find({});
        res.json({success:true, data:foods})
    } catch(error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    } 
}

//remove food item
const removeProduct = async(req, res) => {
    try {
        const food = await productModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:'Food Removed'})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error'})
    }
}

const getProductById = async (req, res) => {
    try {
        const food = await productModel.findById(req.params.id); // Tìm food theo id từ database
        res.json({success:true, data:food})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error'});
    }
};

const addComment = async (req, res) => {
    try {
        const food = await productModel.findById(req.params.id);

        food.ratings.push({
            userId: req.body.userId,
            comment: req.body.comment,
            rating: req.body.rating,
        });
        
        await food.save();
        res.json({success:true, message:"Added comment"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }  
}

export {addProduct, listProduct, removeProduct, getProductById, addComment} 