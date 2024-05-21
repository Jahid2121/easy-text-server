

const getAllRooms = async (req, res) => {
    try {
        res.status(200).json({ message: 'Rooms are returned'})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createRoom = async (req, res) => {
    try {
        res.status(201).json({ message: 'Room created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllRooms, 
    createRoom
}