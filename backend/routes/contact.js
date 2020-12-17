const express = require('express');
const router = express.Router();
const pool = require('../db'); //Connection to db.




//---------------------------GET---------------


//Get contact list

router.get('/', async(req, res) => {

    let query = `SELECT * FROM contact`

    try {
        const getContact = await pool.query(query);
        //Headers
        res.set("X-Total-Count", getContact.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');
        //Response
        res.json(getContact.rows);


    } catch (err) {

        console.error(err.message);
        res.status(500).json({ msg: "Server error" });

    }

})

//Get Contact by ID
router.get('/:id', async(req, res) => {
    let query = `SELECT * FROM contact WHERE id = ${req.params.id} `

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

//-------------DELETE----------------------

router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const delContact = await pool.query('DELETE from contact WHERE id = $1', [id]);        

        if (delContact.rowCount === 1) {
            res.status(200).json({ msg: `Operation #${id} successfully Deleted` })
        } else {
            res.status(404).json({ msg: `Operation #${id} not found` })
        }


    } catch (err) {
        console.error(err.message)
        res.status(500).json({ msg: "Server error" });
    }
})

//--------------------POST-----------------------------------

router.post('/', async(req, res, next) => {

    //Se recupera la informacion del paquete del body

    const { name, email, msg, destination } = req.body;

    //Se genera la SQL query
    const query = "INSERT INTO contact (name,email,msg,destination) VALUES($1,$2,$3,$4) RETURNING *";
    //Se graba en base de datos. Devuelve el mismo objeto.
    try {

        const newPackage = await pool.query(query, [name, email, msg, destination]);
        res.status(200)
        req.body.id = "";
        res.json(req.body);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }
    
});


module.exports = router;