const express = require("express")
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;



// middleware 
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Easy Text is running")
})

app.listen(port, () => {
    console.log(`Easy text is running on ${port}`);
})