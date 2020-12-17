const express = require('express');
const router = express.Router();
const pool = require('../db');
const authorize = require("../middleware/authorize"); // Verifies JWT
const blobReqBlock = require('../middleware/blobReqBlock');
const writeBase64 = require('../helpers/writeBase64')


const PORT = process.env.BACKEND_PORT

if(process.env.ENV === 'local'){
    HOST = process.env.LOCAL_HOST_ENV
    PKGIMG_ENDPOINT = `http://${HOST + ':' + process.env.BACKEND_PORT}/images/pkgImages/`

}else if(process.env.ENV === 'prod'){

    HOST  = process.env.PROD_HOST_ENV
    PKGIMG_ENDPOINT = `http://${HOST}/images/pkgImages/`
}


//-----------------GET------------------------------

//Get All packages

router.get('/', async(req, res) => {

    let query = `SELECT * FROM package ORDER by id ASC`

    try {
        const getPackage = await pool.query(query);
        //Headers
        res.set("X-Total-Count", getPackage.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');

        // Enviamos las imágenes como http://HOST:PORT/images/ + imageid
        for (row in getPackage.rows) {
            var imageid = getPackage.rows[row].imageid
            getPackage.rows[row].imageid = PKGIMG_ENDPOINT + imageid
        }

        //Response
        res.json(getPackage.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }

})

//Get Highlight Packages

router.get('/highlights', async(req, res) => {

    let query = `SELECT * FROM package WHERE highlight = true ORDER by id ASC`

    try {
        const getPackage = await pool.query(query);
        //Headers
        res.set("X-Total-Count", getPackage.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');

        // Enviamos las imágenes como http://HOST:PORT/images/ + imageid
        for (row in getPackage.rows) {
            var imageid = getPackage.rows[row].imageid
            getPackage.rows[row].imageid =  PKGIMG_ENDPOINT + imageid
        }

        //Response
        res.json(getPackage.rows);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }

})

//Get Package by ID
router.get('/:id', async(req, res) => {
        let query = `SELECT * FROM package WHERE id = ${req.params.id} `

        try {
            const getPackage = await pool.query(query);
            //Headers
            res.set("X-Total-Count", getPackage.rowCount);
            res.set('Access-Control-Expose-Headers', 'X-Total-Count');
            //Response
            res.json(getPackage.rows[0]);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: "Server error" });
        }

    })
    //-----------------------PUT----------------------------------------

router.put('/:id', blobReqBlock, async(req, res) => {

    //Grabo imagen en "folder" || Devuelvo nueva imagen (si existe) o caso contrario => req.body.imageid
    let imageTitle = writeBase64(req, "pkgImages");

    //Recupero parametros del edit request
    const { id, destination, price, description,cuotas, highlight} = req.body;

    let query = `UPDATE package SET imageid = $1, destination = $2, price = $3, description = $4, cuotas = $5, highlight = $6 WHERE id = ${id}`

    try {
        const putPackage = await pool.query(query, [imageTitle, destination, price, description, cuotas, highlight]);
        //Headers
        res.set("X-Total-Count", putPackage.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');
        //Response
        if (putPackage.rowCount === 1) {
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



//--------------------POST-----------------------------------

router.post('/', blobReqBlock, async(req, res, next) => {

    //Grabo imagen en "folder" || Devuelvo nombre de nueva imagen (va a ocupar "imageid" en base de datos)
    let imageTitle = writeBase64(req, "pkgImages");

    //Se recupera la informacion del paquete del body

    const { description, destination, highlight, price, cuotas } = req.body;

    //Se genera la SQL query
    const query = "INSERT INTO package (imageid,destination,price,description,cuotas,highlight) VALUES($1,$2,$3,$4,$5,$6) RETURNING *";
    //Se graba en base de datos. Devuelve el mismo objeto.
    try {

        const newPackage = await pool.query(query, [imageTitle, destination, price, description, cuotas,highlight]);
        res.status(200)
        req.body.id = "";
        res.json(req.body);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }
    
});

//--------------DELETE--------------------------


router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const delPkg = await pool.query('DELETE from package WHERE id = $1', [id]);        

        if (delPkg.rowCount === 1) {
            res.status(200).json({ msg: `Operation #${id} successfully Deleted` })
        } else {
            res.status(404).json({ msg: `Operation #${id} not found` })
        }


    } catch (err) {
        console.error(err.message)
        res.status(500).json({ msg: "Server error" });
    }
})







module.exports = router;

//