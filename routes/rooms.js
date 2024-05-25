const { v4: uuidv4 } = require('uuid');
const pool = require('../db')


const getAllRooms = async (req, res) => {
    try {
        const rooms = await pool.query("SELECT * FROM rooms")
        res.status(200).json({ message: 'Rooms are returned', data: rooms.rows})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createRoom = async (req, res) => {
    try {

        const {name, description} = req.body;
        const id = uuidv4();
        console.log(id);

        // inserting room data into database
        const newRoom = await pool.query("INSERT INTO rooms(id,name,description) VALUES ($1, $2, $3) RETURNING *", [id, name, description])
        res.status(201).json({ message: `Room created successfully`, data: newRoom.rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    getAllRooms, 
    createRoom
    
}