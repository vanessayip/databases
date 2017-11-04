var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    //open connection to db on req, close connection on res
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  },

  rooms: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

