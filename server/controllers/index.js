var models = require('../models');
var db = require('../db');
var promise = require('bluebird');
var url = require('url');
var express = require('express');
var parser = require('body-parser');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('in messages GET');
      console.log('req.url: ', req.url);
      models.messages.get('lobby').then(function(results) {
        console.log('results: ', results);
        res.send(results);
      });
    }, // a function which handles a get request for all messages

    //open connection to db on req, close connection on res
    post: function (req, res) {
      console.log('req.body: ', req.body);
      
      models.messages.post(req.body.username, req.body.text, req.body.roomname).then(function(results) {
        console.log('results: ', results);
        res.send();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {},
    post: function (req, res) {
      console.log('req.url: ', req.url);
      console.log('req.body: ', req.body);
      console.log('reqbodyusername', req.body.username);
      console.log('typeof', typeof req.body.username);
      models.users.post(req.body.username).then(function(results) {
        console.log('results: ', results);
        res.send('hi');
      });
    }
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
  'Content-Type': 'application/json'
};