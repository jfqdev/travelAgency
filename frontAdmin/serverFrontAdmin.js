#!/usr/bin/env node
//Deploy config

const path = require("path");
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config({path: '../.env'})


const PORT  = process.env.FRONTADMIN_PORT

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

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Express Server
app.listen(PORT, () => {
    console.log(`Escuchando en  ${PORT}`)
});