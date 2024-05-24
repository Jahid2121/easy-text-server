const { v4: uuidv4 } = require('uuid');
const client = require('../db/index')

const createUser = async (req, res) => {
    try {

        const {name} = req.body;
        const id = uuidv4();

        // inserting room data into database
        const newUser = await client.query("INSERT INTO users(id,name) VALUES ($1, $2) RETURNING *", [id, name])
        res.status(201).json({ message: `User created successfully`, data: newUser.rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getLastUser = async (req, res) => {
    try {
      const result = await pool.query('SELECT name FROM users ORDER BY id DESC LIMIT 1');
      if (result.rows.length > 0) {
        res.json({ lastValue: result.rows[0].name });
      } else {
        res.status(404).json({ message: 'No records found' });
      }
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = {
    createUser,
    getLastUser
}