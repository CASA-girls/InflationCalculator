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
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Database connected successfully');
});
app.use(express.json());

app.post('/api/calculate', (req, res) => {
    const { yearSelect, targetyearSelect, amountInput } = req.body; // Get two years and amount from the front end

    const userCountries = ['France', 'Italy', 'UK', 'Germany'];
    const results = [];
    // Use a loop to process each country
    userCountries.forEach(userCountry => {
        const sqlQuery = `SELECT multiplier FROM inflationcalculator WHERE (year = ? OR year = ?) AND country = ?`;
        db.query(sqlQuery, [yearSelect, targetyearSelect, userCountry], (error, queryResults) => {
            if (error) {
                console.error(`查询出错 for ${userCountry}:`, error);
                return;
            }

            if (queryResults.length === 2) {
                const multiplier1 = queryResults[0].multiplier;
                const multiplier2 = queryResults[1].multiplier;
                const result = (amount / multiplier1) * multiplier2;
                results.push({ country: userCountry, result });

                if (results.length === userCountries.length) {
                    res.json(results); // 返回所有计算结果
                }
            }
        });
    });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});