let express = require("express");
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get("/", indexController.displayHomePage);

router.get("/about", indexController.displayAboutPage);

router.get("/products", indexController.displayProductsPage);

router.get("/services", indexController.displayServicePage);

router.get("/contact", indexController.displayContactPage);

module.exports = router;
