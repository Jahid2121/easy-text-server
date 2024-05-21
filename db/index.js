const { Client } = require('pg');
const { Pool } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    database: 'roomsdb',
    password: '1234'
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = client;


