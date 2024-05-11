import userModel from "../models/userModel.js"

// add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;

        let existingProductIndex = cartData.findIndex(item => item.productId === req.body.itemId && item.size === req.body.size);

        if (existingProductIndex !== -1) {
            cartData[existingProductIndex].quantity += req.body.quantity
        } else {
            cartData.push({
                productId: req.body.itemId,
                quantity: req.body.quantity,
                size: req.body.size
            })
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        let existingProductIndex = cartData.findIndex(item => item.productId === req.body.itemId && item.size === req.body.size);

        if (existingProductIndex !== -1) {
            cartData[existingProductIndex].quantity--;
        }
        
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({success:true, message:"Remove from cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true, cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addToCart, removeFromCart, getCart}