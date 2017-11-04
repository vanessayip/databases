var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student", no password,
// and to the database "chat".
var dbConnection;
dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

module.exports.dbConnection = dbConnection;