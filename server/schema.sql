CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int auto_increment,
  name varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int auto_increment, 
  name varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int auto_increment, 
  user_id int, 
  createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp, 
  msg varchar(140), 
  room_id int, 

  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);
/* Create other tables and define schemas for them here! */


-- INSERT INTO users (name) values ("name");
-- INSERT INTO rooms (name) values ("roomname");
-- INSERT INTO messages (user_id, msg, room_id) values ((SELECT id from users where name = "bob"), "hello", (SELECT id from rooms where name = "lobby"));

-- UPDATE messages SET user_id = "1" WHERE id != 1;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


