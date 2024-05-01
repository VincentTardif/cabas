const express = require('express');

const router = express.Router();

const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage);

router.get('/about', mainController.aboutPage);

router.get('/places', mainController.placePage);

router.get('/vendors', mainController.vendorPage);

router.get('/permanences', mainController.distributionPage);

router.get('/where', mainController.wherePage)

router.get('/contact', mainController.contactPage);
router.post('/sendMail', mainController.sendMail);







//* un controller spécifique pour la page error que je mets dans le main controller (controller globale)
router.use(mainController.errorPage);

module.exports = router;