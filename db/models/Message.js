const client = require('../index');

const createMessageTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS messages (
            id SERIAL PRIMARY KEY,
            room_id INTEGER NOT NULL,
            user VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (room_id) REFERENCES rooms(id)
        );
    `;
    await client.query(query);
};

const getMessagesByRoom = async (roomId) => {
    const res = await client.query('SELECT * FROM messages WHERE room_id = $1 ORDER BY timestamp', [roomId]);
    return res.rows;
};

const createMessage = async (roomId, user, content) => {
    const res = await client.query(
        'INSERT INTO messages (room_id, user, content) VALUES ($1, $2, $3) RETURNING *',
        [roomId, user, content]
    );
    return res.rows[0];
};

module.exports = {
    createMessageTable,
    getMessagesByRoom,
    createMessage
};
