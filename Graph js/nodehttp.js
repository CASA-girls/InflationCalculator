
//npm install express --save 
//npm install -g mysql
//npm install cors --save

//express (Framework Environments)
//mysql (Database Environments)
//cors (Cross-origin request)

const express = require('express')
const router = express.Router()
const { dbDevMsqlConfig } = require('./mysql')
var mysql =require('mysql');

module.exports = router


// Bar chart for inflation rate  //Line for co2
router.get('/getechart', (req, res) => {
    
    var newjson ={}
    //This is connect pool
    var conn = new mysql.createConnection(dbDevMsqlConfig);
     
    //here is to check the database connection is successful
    conn.connect(function (err) {
      if (err) {
        newjson.code = -1
        newjson.messages = err
        res.send(JSON.stringify(newjson));
      }
  
      var sql = "select * from inflationcalculator "; //THIS IS THE MAIN(MOST IMPORTANT) SQL LINE, Change to our table name
  
      //Search in the SQL Table
      conn.query(sql, function (err, recordset) {
        
        if (err) {
          newjson.code = -1
          newjson.messages = err
          res.send(JSON.stringify(newjson));
        }
        else {
          newjson.code = 0
          newjson.messages = 'Successfully Retrieved'
          newjson.data = recordset;
          res.send(JSON.stringify(newjson));
        }
      });
    });
  
  
  
  })



