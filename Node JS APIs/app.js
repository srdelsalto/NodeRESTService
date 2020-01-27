var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "dbespe.cjvk5snqqjmr.us-east-2.rds.amazonaws.com",
  user     : "rootESPE",
  password : "rootESPE",
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();