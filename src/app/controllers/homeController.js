class HomeController {
  async renderHomePage(req, res) {
    try {
      res.render("../../resources/views/home");
    } catch (error) {
      console.error("Error rendering login page:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new HomeController();