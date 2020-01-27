const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
    host     : "root.ct8e81trob0e.us-east-1.rds.amazonaws.com",
    user     : "root",
    password : "mcv923488",
    port     : 3306,
    database: "examen"
});

// open the MySQL connection
connection.connect(error => {
  if (error) 
    throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;