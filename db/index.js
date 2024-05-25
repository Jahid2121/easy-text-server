const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    database: 'roomsdb',
    password: '1234'
});



// const pool = new Pool({
//     connectionString: process.env.POSTGRES_URL,
//   })

pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = pool;


