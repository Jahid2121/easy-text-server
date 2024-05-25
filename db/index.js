const { Pool } = require('pg');
require('dotenv').config()

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     port: 5432,
//     database: 'roomsdb',
//     password: '1234'
// });

// pool.connect()
//     .then(() => console.log('Connected to the database'))
//     .catch(err => console.error('Connection error', err.stack));






const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {rejectUnauthorized: false}
  })

  const createTables = async () => {
    try {
      await pool.query(`
     CREATE TABLE IF NOT EXISTS rooms (
    id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(35),
    description VARCHAR(200)
);
   `);
    } catch (err) {
      console.log(err);
    }
  
    try {
      await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        room_id VARCHAR(100) REFERENCES rooms(id),
        messageSender VARCHAR(100),
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`
       )
    }
    catch (err) {
        console.log(err);
      }
      try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS blogs (
            id VARCHAR(255) PRIMARY KEY, 
            title VARCHAR(255),
            description VARCHAR(500)
        );
        `
         )
      }
      catch (err) {
          console.log(err);
        }
}

createTables()



module.exports = {
    query: (text, params) => pool.query(text, params),
  };


