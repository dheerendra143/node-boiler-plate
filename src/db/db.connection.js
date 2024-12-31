const { Pool } = require('pg');
const config = {
    user: 'postgres', 
    database: 'testDB', 
    password: 'admin', 
    host: 'localhost', 
    port: 5432, 
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
};
let pool = '';

const connect = () => {
    pool = new Pool(config);
    
    pool.connect();
    pool.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack);
    });

    pool.on('connect', function (err, client) {
        console.error('connected');
    });

}


module.exports = {
//  connect,
 query: (queryStr, param) => pool.query(queryStr, param),
}