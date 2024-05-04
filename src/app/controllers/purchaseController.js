const bcrypt = require('bcrypt');
const User = require('../models/user'); 

class PurchaseController {
  async renderPurchasePage(req, res) {
    try {
      res.render("../../resources/views/user/login");
    } catch (error) {
      console.error("Error rendering login page:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new PurchaseController();