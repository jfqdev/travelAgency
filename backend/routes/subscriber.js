const express = require('express');
const router = express.Router();
const pool = require('../db'); //Connection to db.




//---------------------------GET---------------


//Get subscribers list

router.get('/', async(req, res) => {

    let query = `SELECT * FROM subscriber`

    try {
        const getSubscriber = await pool.query(query);
        //Headers
        res.set("X-Total-Count", getSubscriber.rowCount);
        res.set('Access-Control-Expose-Headers', 'X-Total-Count');
        //Response
        res.json(getSubscriber.rows);


    } catch (err) {

        console.error(err.message);
        res.status(500).json({ msg: "Server error" });

    }

})

//-----------DELETE-------------------
router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const delSub = await pool.query('DELETE from subscriber WHERE id = $1', [id]);        

        if (delSub.rowCount === 1) {
            res.status(200).json({ msg: `Operation #${id} successfully Deleted` })
        } else {
            res.status(404).json({ msg: `Operation #${id} not found` })
        }


    } catch (err) {
        console.error(err.message)
        res.status(500).json({ msg: "Server error" });
    }
})


//------POST----------
router.post('/', async(req, res, next) => {


    //Se recupera la informacion del subscriber del body

    const {email} = req.body;

    //Se genera la SQL query
    const query = "INSERT INTO subscriber (email) VALUES($1) RETURNING *";
    //Se graba en base de datos. Devuelve el mismo objeto.
    try {

        const newSubscriber = await pool.query(query, [email]);
        res.status(200)
        req.body.id = "";
        res.json(req.body);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }
    
});











module.exports = router;