var models = require('../models');
var db = require('../db');
var promise = require('bluebird');
var url = require('url');
var qs = require('querystring');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('in messages GET');
      db.dbConnection.connect();
      console.log('req.url', req.url);
      models.messages.get('lobby');
      res.send('hi');
      db.dbConnection.end();
      
      // res.on('end', function() {
      //   // console.log('GET msg body: ', req.body);
      //   console.log('req.url ', req.url);
      //   res.writeHead(201, this.headers);
      //   res.write(models.messages.get());
      //   db.dbConnection.end();
      //   res.end();
      // });
    }, // a function which handles a get request for all messages

    //open connection to db on req, close connection on res
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {},
    post: function (req, res) {}
  },

  rooms: {
    get: function (req, res) {
      
    },
    post: function (req, res) {
      db.dbConnection.connect();
      res.on('end', function() {
        console.log('POST rooms body: ', req.body);
        db.dbConnection.end();
        res.writeHead(201, this.headers);
        res.end(models.rooms.post());
      });
      
    }
  }
};

module.exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/json'
};