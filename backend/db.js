// Database config.
// Como obviar recargar .env en este  archivo?
const dotenv = require('dotenv')
dotenv.config({path: '../.env'})

const Pool = require('pg').Pool;
const proConfig = process.env.DATABASE_URL // DB



const pool = new Pool({
    connectionString: proConfig
});

module.exports = pool;