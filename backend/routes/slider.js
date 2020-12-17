const express = require('express');
const router = express.Router();
const pool = require('../db');


//--------------MIDDLEWARE AND HELPERS---------
const blobReqBlock = require('../middleware/blobReqBlock'); //Block Blob Request
const writeBase64 = require('../helpers/writeBase64') //Create Image
const authorize = require("../middleware/authorize"); // Verifies JWT

const PORT = process.env.BACKEND_PORT

if(process.env.ENV === 'local'){
    HOST = process.env.LOCAL_HOST_ENV
    SLDIMG_ENDPOINT = `http://${HOST + ':' + process.env.BACKEND_PORT}/images/sliderImages/`

}else if(process.env.ENV === 'prod'){

    HOST  = process.env.PROD_HOST_ENV
    SLDIMG_ENDPOINT = `http://${HOST}/images/sliderImages/`

  
}

//-----------------GET-------------------------------------

//GET all slides
router.get('/', async(req, res) => {

    let query = `SELECT * FROM slider ORDER by id ASC`

    try {
        const getSlider = await pool.query(query);
        //Headers
        res.set("X-Total-Count", getSlider.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');

        // Enviamos las imágenes http://HOST:PORT/images/sliderImages/ + imageid

        for (row in getSlider.rows) {
            var imageid = getSlider.rows[row].imageid
            getSlider.rows[row].imageid = SLDIMG_ENDPOINT + imageid
        }

        //Response
        res.json(getSlider.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }

})



//Get Slides by ID
router.get('/:id', async(req, res) => {
    let query = `SELECT * FROM slider WHERE id = ${req.params.id} `

    try {
        const getSlides = await pool.query(query);
        //Headers
        res.set("X-Total-Count", getSlides.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');
        //Response
        res.json(getSlides.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }

})


//----------------------PUT----------------------------------------------------
router.put('/:id', blobReqBlock, async(req, res) => {

    //Grabo imagen en "folder" || Devuelvo nueva imagen (si existe) o caso contrario => req.body.imageid
    let imageTitle = writeBase64(req, "sliderImages");

    //Recupero parametros del edit request
    const { id, title, description} = req.body;

    let query = `UPDATE slider SET imageid = $1, title = $2, description = $3 WHERE id = ${id}`

    try {
        const putSlider = await pool.query(query, [imageTitle, title, description]);
        //Headers
        res.set("X-Total-Count", putSlider.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');
        //Response
        if (putSlider.rowCount === 1) {
            res.status(200);
            res.json(req.body);
        } else {
            res.status(404)
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }

})





module.exports = router;