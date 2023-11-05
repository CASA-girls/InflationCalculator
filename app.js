const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3306;

const db = mysql.createConnection({
    host: 'casa0017.cetools.org',
    user: 'ucqbutk',
    password: '****',
    database: 'ucqbutk'
});
connection.connect();

app.get('/api/inflation', (req, res) => {
    const year = req.query.year; // Get query parameters from the front end
    const country = req.query.country; // Get query parameters from the front end

    const sqlQuery = `SELECT multiplier FROM inflationcalculator WHERE year = ? AND country = ?`;
    connection.query(sqlQuery, [year, country], (error, results) => {
        if (error) {
            console.error('Error in query:', error);
            res.status(500).json({ error: 'Query error' });
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