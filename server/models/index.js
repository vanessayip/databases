var db = require('../db');
var mysql = require('mysql');
var promise = require('bluebird');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    get: function (userName) {
      return new Promise(function (resolve, reject) {
        db.query('SELECT name FROM users WHERE name = ?', [userName], function (err, results, fields) {
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
        db.query('INSERT INTO users (name) values ?', [userName], function (err, results, fields) {
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
    get: function (roomName) {
      return new Promise(function (resolve, reject) {
        db.query('SELECT name FROM rooms WHERE name = ?', [roomName], function (err, results, fields) {
          if (err) {
            console.log('error from rooms get query');
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    },
    post: function (roomName) {
      return new Promise(function (resolve, reject) {
        db.query('INSERT INTO rooms (name) values ?', [roomName], function (err, results, fields) {
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

