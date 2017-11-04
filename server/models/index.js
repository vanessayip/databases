var db = require('../db');
var mysql = require('mysql');
var promise = require('bluebird');

module.exports = {
  messages: {
    get: function (roomName) {
      return new Promise(function (resolve, reject) {
        db.dbConnection.query('SELECT users.name as username, messages.msg as text, rooms.name as roomname FROM users JOIN messages ON users.id = messages.user_id JOIN rooms ON messages.room_id = rooms.id WHERE rooms.name = ? ORDER BY messages.createdAt DESC', [roomName], function (err, results, fields) {
          if (err) {
            console.log('error from messages get query');
            reject(err);
          } else {
            console.log('inside messages get');
            resolve(results);
          }
        });
      });
    },
    post: function (userName, msg, roomName) {
      return new Promise(function (resolve, reject) {
        db.dbConnection.query('INSERT INTO messages (user_id, msg, room_id) values ((SELECT id from users where name = ?), ?, (SELECT id from rooms where name = ?));', [userName, msg, roomName], function (err, results, fields) {
          if (err) {
            console.log('error from message post insert');
            reject(err);
          } else {
            console.log('inside messages post');
            resolve(results);
          }
        });
      });
    }
  },

  users: {
    get: function (userName) {
      return new Promise(function (resolve, reject) {
        db.dbConnection.query('SELECT name FROM users WHERE name = ?', [userName], function (err, results, fields) {
          if (err) {
            console.log('error from users get query');
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    },
    post: function (userName) {
      return new Promise(function (resolve, reject) {
        db.dbConnection.query('INSERT INTO users (name) values (?)', [userName], function (err, results, fields) {
          if (err) {
            console.log('error from users post insert');
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    }
  },

  rooms: {
    //populating the rooms drop down
    get: function () {
      return new Promise(function (resolve, reject) {
        db.dbConnection.query('SELECT name FROM rooms', function (err, results, fields) {
          if (err) {
            console.log('error from rooms get query');
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    },
    //adding a new room to the rooms drop down
    post: function (roomName) {
      return new Promise(function (resolve, reject) {
        db.dbConnection.query('INSERT INTO rooms (name) values ?', [roomName], function (err, results, fields) {
          if (err) {
            console.log('error from rooms post insert');
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    }
  }
};

