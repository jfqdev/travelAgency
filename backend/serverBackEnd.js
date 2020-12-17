#!/usr/bin/env node
//Deploy config

const path = require("path");
const express = require('express');
const app = express();
const index = require('./routes/index'); // Getting routes manager.
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config({path: '../.env'})

const PORT  = process.env.BACKEND_PORT

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next();
});
app.use(cors());

app.use('/images', express.static('dbImages'))
app.use(express.json({ limit: 10000000 })) //JSON parser. 
app.use(index); // Mounting our routes manager.


//Express Server
app.listen(PORT, () => {
    console.log(`Ambiente: ${process.env.ENV} | Escuchando en  ${PORT}`)
});