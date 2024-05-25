CREATE DATABASE roomsDB;

CREATE TABLE rooms (
    id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(35),
    description VARCHAR(200)
);

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(35)
    );

Create the rooms table with id as SERIAL

-- CREATE TABLE rooms (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(35),
--     description VARCHAR(200)
-- );

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    room_id VARCHAR(100) REFERENCES rooms(id),
    messageSender VARCHAR(100),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE rooms;


INSERT INTO rooms (id, name, description)
VALUES 
(01, Hey there!, can we be friends?),
(02, Tech Talk, What is your plan to do in the tech industry?),
(03, Productivity, Let's discuss about productivity and how we can get the more things done within short time );

SELECT * FROM rooms


// create the messages table with a foreign key reference to the rooms table




-- Insert sample messages into the messages table 
INSERT INTO messages (room_id, content)
VALUES 
(1, 'Hello everyone! This is our first message.'),
(2, 'I plan to work on AI and machine learning.'),
(3, 'Any tips on improving productivity?');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL, 
    password VARCHAR(255) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


// create blogs 


CREATE TABLE blogs (
    id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255),
    description VARCHAR(500)
);
