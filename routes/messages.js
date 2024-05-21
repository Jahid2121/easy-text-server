const getSpecificRoomMsg = async (req, res) => {
    try {
        const {id} = req.params
        res.status(200).json({ message: 'Specific room message is returned with id: ', id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    getSpecificRoomMsg
}