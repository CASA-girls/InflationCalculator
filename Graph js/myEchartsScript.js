// initialize echarts
var myChart = echarts.init(document.querySelector('#Graph1'));

// configure
var option = {
    legend: {
        orient: 'vertical',
        right: 10,
        top: 'center'
    },
    // data
    dataset: {
        source: [
            ['Country', 'France', 'UK', 'Italy', 'Germany'],
            ['1960', 4.1399, 5, 2, 1, 8] 

        ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' }
    ]
};

// Configure the chart
myChart.setOption(option);

// 
const express = require('express');
const mysql = require('mysql'); // Using the SQL data base on echart
const app = express();

// Connected to SQL
//*const connection = mysql.createConnection({
// host: casa0017.cetools.org,
//  user: ucqbutk,
//  password: zahugufelu,
//  database: inflationcalculator
//});]

// import the SQL to the database
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

// API Endpoint to get data from MySQL
// app.get('/data-from-mysql', function (req, res) {
  const sqlQuery = year; // array on sql 

