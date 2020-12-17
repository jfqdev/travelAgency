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
    NEWSIMG_ENDPOINT = `http://${HOST + ':' + process.env.BACKEND_PORT}/images/newsImages/`

}else if(process.env.ENV === 'prod'){

    HOST  = process.env.PROD_HOST_ENV
    NEWSIMG_ENDPOINT = `http://${HOST}/images/newsImages/`

  
}


//---------------------------GET---------------------------------------------------

//GET all packages
router.get('/', async(req, res) => {

    let query = `SELECT * FROM newsletter ORDER by id ASC`

    try {
        const getNews = await pool.query(query);
        //Headers
        res.set("X-Total-Count", getNews.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');

        // Enviamos las imágenes http://HOST:PORT/images/newsImages/ + imageid

        for (row in getNews.rows) {
            var imageid = getNews.rows[row].imageid
            getNews.rows[row].imageid = NEWSIMG_ENDPOINT + imageid            
        }

        //Response
        res.json(getNews.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }

})


//Get Newsletter by ID
router.get('/:id', async(req, res) => {
    let query = `SELECT * FROM newsletter WHERE id = ${req.params.id} `

    try {
        const getNews = await pool.query(query);
        //Headers
        res.set("X-Total-Count", getNews.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');
        //Response
        res.json(getNews.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }

})



//---------------------PUT-----------------------------------

router.put('/:id', blobReqBlock, async(req, res) => {

    //Grabo imagen en "folder" || Devuelvo nueva imagen (si existe) o caso contrario => req.body.imageid
    let imageTitle = writeBase64(req, "newsImages");

    //Recupero parametros del edit request
    const { id, title, description} = req.body;

    let query = `UPDATE newsletter SET imageid = $1, title = $2, description = $3 WHERE id = ${id}`

    try {
        const putNews = await pool.query(query, [imageTitle, title, description]);
        //Headers
        res.set("X-Total-Count", putNews.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');
        //Response
        if (putNews.rowCount === 1) {
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