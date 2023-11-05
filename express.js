const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3306; // 你可以根据需要选择端口号

const db = mysql.createConnection({
    host: 'casa0017.cetools.org',
    user: 'ucqbutk',
    password: '****',
    database: 'ucqbutk'
});
connection.connect();

app.get('/api/inflation', (req, res) => {
    const year = req.query.year; // 从前端获取查询参数
    const country = req.query.country; // 从前端获取查询参数

    const sqlQuery = `SELECT multiplier FROM inflationcalculator WHERE year = ? AND country = ?`;
    connection.query(sqlQuery, [year, country], (error, results) => {
        if (error) {
            console.error('查询出错:', error);
            res.status(500).json({ error: '查询出错' });
        } else {
            if (results.length > 0) {
                const multiplier = results[0].multiplier;
                res.json({ multiplier });
            } else {
                res.json({ multiplier: 1 }); // 返回一个默认值
            }
        }
    });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});