
const express = require('express')
const router = express.Router()
const { dbDevMsqlConfig } = require('./mysql')
var mysql = require('mysql');

module.exports = router

//Request the back end to get data
router.post('/getmultiplier', (req, res) => {
  var newjson = {}
  var conn = new mysql.createConnection(dbDevMsqlConfig);

  //Check whether the database connection is normal
  conn.connect(function (err) {
    if (err) {
      newjson.code = -1
      newjson.messages = err
      res.send(JSON.stringify(newjson));
    }

    var sql = "select * from  inflationcalculator order by `year` ";

    //Querying mysql tables
    conn.query(sql, function (err, recordset) {

      if (err) {
        newjson.code = -1
        newjson.messages = err
        res.send(JSON.stringify(newjson));
      }
      else {
        newjson.code = 0
        newjson.messages = 'Successfully access'
        newjson.data = recordset;
        res.send(JSON.stringify(newjson));
      }
    });
  });


})




router.get('/getechart', (req, res) => {

  var newjson = {}

  var conn = new mysql.createConnection(dbDevMsqlConfig);

  conn.connect(function (err) {
    if (err) {
      newjson.code = -1
      newjson.messages = err
      res.send(JSON.stringify(newjson));
    }

    var sql = "select * from inflationcalculator ";

    conn.query(sql, function (err, recordset) {

      if (err) {
        newjson.code = -1
        newjson.messages = err
        res.send(JSON.stringify(newjson));
      }
      else {
        newjson.code = 0
        newjson.messages = 'Successfully access'
        newjson.data = recordset;
        res.send(JSON.stringify(newjson));
      }
    });
  });
})
