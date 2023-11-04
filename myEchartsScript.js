// 初始化 ECharts 实例，指定图表容器
var myChart = echarts.init(document.querySelector('#Graph1'));

// 定义图表配置
var option = {
    legend: {
        orient: 'vertical',
        right: 10,
        top: 'center'
    },
    // 数据集
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

// 使用配置项绘制图表
myChart.setOption(option);

// 这里可以添加对获取 SQL 数据的处理
// 引入所需的模块
const express = require('express');
const mysql = require('mysql'); // 如果使用 MySQL 数据库
const app = express();

// 创建 MySQL 数据库连接
const connection = mysql.createConnection({
  host: 'casa0017.cetools.org',
  user: 'ucqbutk',
  password: 'zahugufelu',
  database: 'inflationcalculator'
});

// 连接到数据库
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

// API Endpoint to get data from MySQL
app.get('/data-from-mysql', function (req, res) {
  const sqlQuery = year:int(11); // 编写适当的 SQL 查询语句

  // 执行 SQL 查询
  connection.query(sqlQuery, function(err, rows) {
    if (err) {
      console.error('Error executing query: ' + err);
      res.status(500).send('Database error');
      return;
    }

    // 将查询结果以 JSON 格式发送给客户端
    res.json(rows);
  });
});

// 启动服务器
const port = 3306;
app.listen(port, () => {
  console.log('Server running on port ' + port);
});

//以上属于插入内容等下要改

// 使用 fetch 获取 SQL 数据的 JSON 文件
fetch('C:/Users/DELL/Documents/GitHub/InflationCalculator/SQL_data_.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // 在这里使用从 JSON 文件获取的数据
        // 可以处理数据，并根据需求将数据连接到 ECharts 图表
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });
