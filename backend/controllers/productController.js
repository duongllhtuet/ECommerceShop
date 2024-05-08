const Grocery = require('../models/productModel'); 

class GroceryController {
    async getAllGroceries(req, res) {
        try {
            const data = await Grocery.find();
            res.render('grocery/grocery-index', { data });
        } catch (error) {
            console.error('Error rendering index:', error);
            res.status(500).send('Internal Server Error');
        }
    }
    
    async getGroceryById(req, res) {
        try {
            const id = req.params.id;
            const data = await Grocery.findById(id);
            
            if (!data) {
                return res.status(404).send('Grocery not found');
            }
            
            res.render('grocery/grocery-details', { data });
        } catch (error) {
            console.error('Error rendering index:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new GroceryController();