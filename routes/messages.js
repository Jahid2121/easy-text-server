const { v4: uuidv4 } = require('uuid');
const pool = require('../db');

const getSpecificRoomMsg = async (req, res) => {
    const roomId = req.params.id;
    try {
        const messages = await pool.query("SELECT * FROM messages WHERE room_id = $1 ORDER BY created_at ASC", [roomId]);
        res.status(200).json({ message: 'Messages fetched successfully', data: messages.rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const sendMessageToRoom = async (req, res) => {
    const roomId = req.params.id;
    const { userName, message } = req.body;
    try {
        const newMessage = await pool.query(
            "INSERT INTO messages ( room_id, messageSender, content) VALUES ($1, $2, $3) RETURNING *",
            [roomId, userName, message]
        );
        res.status(201).json({ message: 'Message sent successfully', data: newMessage.rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getSpecificRoomMsg,
    sendMessageToRoom
};
