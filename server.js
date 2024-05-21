const express = require("express")
const app = express()
const cors = require('cors');
const { createRoomTable } = require("./db/models/Room");
const { createMessageTable } = require("./db/models/Message");
const { getAllRooms } = require("./routes/rooms");
const port = process.env.PORT || 5000;



// middleware 
app.use(cors())
app.use(express.json())


app.get('/', async (req, res) => {
    res.send("Welcome to the Easy Text project!")
})

app.listen(port, () => {
    console.log(`Easy Text is listening on ${port}`);
})


// GET /rooms: Fetch all chat rooms.
// GET /rooms/:id/messages: Fetch messages for a specific chat room.
// POST /rooms: Create a new chat room.
// POST /rooms/:id/messages: Send a new message to a chat room.



app.get('/rooms', getAllRooms)
