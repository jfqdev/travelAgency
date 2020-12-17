const express = require('express');
const router = express.Router();


//---------------------------GET---------------


//Get subscribers list

router.get('/', async(req, res) => {

    res.sendFile('frontWeb/index.html', { root: __dirname });

})


module.exports = router;
