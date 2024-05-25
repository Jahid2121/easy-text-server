const { v4: uuidv4 } = require('uuid');
const pool = require('../db')


const getAllBlogs = async (req, res) => {
    try {
        const blogs = await pool.query("SELECT * FROM blogs")
        res.status(200).json({ message: 'Blogs are returned', data: blogs.rows})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createBlogs = async (req, res) => {
    try {

        const {title, description} = req.body;
        const id = uuidv4();
        console.log(id);

        // inserting room data into database
        const newBlogs = await pool.query("INSERT INTO blogs(id,title,description) VALUES ($1, $2, $3) RETURNING *", [id, title, description])
        res.status(201).json({ message: `Room created successfully`, data: newBlogs.rows });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    getAllBlogs, 
    createBlogs
    
}