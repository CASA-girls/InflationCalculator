const fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'casa0017.cetools.org',
  user: 'ucqbutk',
  password: 'zahugufelu',
  database: 'Inflation Calculator'
});

// Read the SQL file
const sqlQuery = fs.readFileSync('queries.sql', 'utf8');

// Connect to the database
connection.connect();

// Execute the query
connection.query(sqlQuery, (error, results, fields) => {
  if (error) throw error;
  console.log('Results:', results);
});

// Close the connection
connection.end();
