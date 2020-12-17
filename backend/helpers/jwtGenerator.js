const jwt = require("jsonwebtoken");
//require("dotenv").config();
require('../config/config');

function jwtGenerator(user_id) {
    const payload = {
        user: {
            id: user_id
        }
    };

    return jwt.sign(payload, process.env.jwtKey, { expiresIn: "5h" });
}


module.exports = jwtGenerator;