const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3306; // 你可以根据需要选择端口号

const db = mysql.createConnection({
    host: 'casa0017.cetools.org',
    user: 'ucqbutk',
    password: 'zahugufelu',
    database: 'ucqbutk'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to the database');
});

// 创建一个路由来处理 API 请求
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM inflationcalculator'; // 替换为你的表名
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err);
            res.status(500).json({ error: 'Error executing query' });
            return;
        }
        res.json({ data: results });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});