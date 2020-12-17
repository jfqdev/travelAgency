const bcrypt = require('bcryptjs');
const { response } = require('express');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const RONDAS = 10
const ADMUSER = 'admin'
const ADMPWD  = 'passAdmin123!!'

try{ 
    let salt  = bcrypt.genSaltSync(RONDAS)
    let hash  = bcrypt.hashSync(ADMPWD,salt)

    /*let  query = 'INSERT INTO admin_user (adm_user, adm_password) VALUES($1, $2)'
    let values = [ADMUSER,hash]

    pool.query(query,values,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Usuario creado')
        }
    })*/
    console.log('Usuario:'+ADMUSER)   
    console.log('Pass Hash:'+  hash)
}catch(error){
    console.log(error)
}

