const express = require('express');
const router = express.Router();
const authorize = require("../middleware/authorize"); // Verifies JWT

//Routes
//const operation = require('./operation');
//const authentication = require('./authentication');
//const information = require('./information');
const package = require("./package");
const subscriber = require('./subscriber');
const authentication = require('./authentication')
const slider = require('./slider');
const newsletter = require('./newsletter')
const contact = require('./contact')

//Mounting routes.
/* router.use('/operation', authorize, operation);
router.use('/information', authorize, information); */

router.use('/api/packages', package);
router.use('/api/slider', slider);
router.use('/api/newsletter', newsletter);
router.use('/api/subscribers', subscriber);
router.use('/api/contact', contact);
router.use('/authentication', authentication);

/* router.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
}) */



module.exports = router;