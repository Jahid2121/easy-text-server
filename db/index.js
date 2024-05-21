const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '1234',
    database: 'testDB'
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = client;


// const { Client } = require('pg')

// const client = new Client({
//     host: 'localhost',
//     user: 'postgres',
//     port: 5432,
//     password: '1234',
//     database: 'testDB'

// })

// client.connect()

// client.query(`select * from users`, (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
//     client.end;
// })