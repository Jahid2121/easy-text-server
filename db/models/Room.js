const client = require('../index');

const createRoomTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS rooms (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
    `;
    await client.query(query);
};

const getAllRooms = async () => {
    const res = await client.query('SELECT * FROM rooms');
    return res.rows;
};

const createRoom = async (name) => {
    const res = await client.query('INSERT INTO rooms (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
};

module.exports = {
    createRoomTable,
    getAllRooms,
    createRoom
};
