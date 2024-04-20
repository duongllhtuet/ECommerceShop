const express = require('express');
const router = express.Router();
const Grocery = require('../models/grocery');

// routes
router.get('/', async (req, res) => {
    try {
        const data = await Grocery.find();
        res.render('grocery/grocery-index', {data})
    } catch (error) {
        console.log('Error rendering index:', error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id

        const data = await Grocery.findById({_id: id});
        
        res.render('grocery/grocery-index', {data})
    } catch (error) {
        console.log('Error rendering index:', error);
    }
})

module.exports = router;
