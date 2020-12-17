const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require('../db');
const jwtGenerator = require("../helpers/jwtGenerator");
const authorize = require("../middleware/authorize");


router.post("/login", async(req, res) => {

    const { adm_user, adm_password } = req.body; //Client must include mail and password in the request body 


    try {
        const userResult = await pool.query("SELECT * FROM admin_user WHERE adm_user = $1", [
            adm_user
        ]);

        
        //Searching email en db
        if (userResult.rows.length === 0) {
            return res.status(401).json({ msg: "Credenciales  incorrectas" });
        }

        //Validating password.
        const validPassword = await bcrypt.compare(
            adm_password,
            userResult.rows[0].adm_password
        );

        if (!validPassword) {
            return res.status(401).json({ msg: "Credenciales Incorrectas" });
        }

        //Return token
        const jwtToken = jwtGenerator(userResult.rows[0].id);
        return res.json({ jwtToken });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    } 

});



module.exports = router;




/*router.post("/verify", authorize, (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});*/

//Register a new user.
/*router.post("/register", async(req, res) => {

    const { mail, password, name } = req.body;


    try {
        const user = await pool.query("SELECT * FROM usuario WHERE mail = $1", [
            mail
        ]);

        if (user.rows.length > 0) {
            return res.status(401).json({ msg: "User already exist" });
        }

        //Generating a 10 rounds salt.
        const salt = await bcrypt.genSalt(10);

        //Hashing password+salt
        const bcryptPassword = await bcrypt.hash(password, salt);

        //Storing user credentials on db
        let newUser = await pool.query(
            "INSERT INTO usuario (mail, pass, nombre) VALUES ($1, $2, $3) RETURNING *", [mail, bcryptPassword, name] // storing hashed password.
        );

        //Generating token
        const jwtToken = jwtGenerator(newUser.rows[0].userid);

        //Return token to the client.
        return res.json({ jwtToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }
});*/