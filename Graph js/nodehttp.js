
//npm install express --save 导入这个框架
//npm install -g mysql
//npm install cors --save

//express 框架环境
//mysql 数据库环境
//cors 跨域请求

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
     
    //判断数据库链接是否通
    conn.connect(function (err) {
      if (err) {
        newjson.code = -1
        newjson.messages = err
        res.send(JSON.stringify(newjson));
      }
  
      var sql = "select * from inflationcalculator "; //核心sql 语句 需要修改
  
      //查询mysql 表
      conn.query(sql, function (err, recordset) {
        
        if (err) {
          newjson.code = -1
          newjson.messages = err
          res.send(JSON.stringify(newjson));
        }
        else {
          newjson.code = 0
          newjson.messages = '获取成功'
          newjson.data = recordset;
          res.send(JSON.stringify(newjson));
        }
      });
    });
  
  
  
  })



