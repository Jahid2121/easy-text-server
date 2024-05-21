CREATE DATABASE roomsDB;

CREATE TABLE rooms (
    id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(35),
    description VARCHAR(200)
);

DROP TABLE rooms;


INSERT INTO rooms (id, name, description)
VALUES 
(01, Hey there!, can we be friends?),
(02, Tech Talk, What is your plan to do in the tech industry?),
(03, Productivity, Let's discuss about productivity and how we can get the more things done within short time );

SELECT * FROM rooms
