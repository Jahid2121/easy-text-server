const express = require("express")
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');
const app = express()
const cors = require('cors');
const { createRoomTable } = require("./db/models/Room");
const { createMessageTable } = require("./db/models/Message");
const { getAllRooms, createRoom } = require("./routes/rooms");
const port = process.env.PORT || 5000;
const client = require('./db');
const { getSpecificRoomMsg, sendMessageToRoom } = require("./routes/messages");
const { createUser, getLastUser } = require("./routes/users");
const { createBlogs, getAllBlogs } = require("./routes/blogs");

dotenv.config()
// middleware 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


app.get('/', async (req, res) => {
    res.send("Welcome to the Easy Text project!")
})

app.listen(port, () => {
    console.log(`Easy Text is listening on ${port}`);
})


// GET /rooms: Fetch all chat rooms.
app.get('/rooms', getAllRooms)





// GET /rooms/:id/messages: Fetch messages for a specific chat room.
app.get('/rooms/:id/messages', getSpecificRoomMsg)



app.post('/rooms/:id/messages', sendMessageToRoom)



// POST /rooms: Create a new chat room.
app.post('/rooms', createRoom)


// POST /user: Create a user.
app.post('/users', createUser)


// POST /rooms/:id/messages: Send a new message to a chat room.




// POST /blogs create a new blog 
app.post('/blogs', createBlogs)


// get /blogs get all blog 
app.get('/blogs', getAllBlogs)
