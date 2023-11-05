function calculateInflation() {
    const amount = parseFloat(document.getElementById("amountInput").value);
    const yearSelect = document.getElementById("yearSelect").value;
    const targetyearSelect = document.getElementById("targetyearSelect").value;
    const userCountries = ['France', 'Italy', 'UK', 'Germany'];
    const results = [];
    const mysql = require('mysql');

    // 创建数据库连接
    const connection = mysql.createConnection({
        host: 'casa0017.cetools.org',
        user: 'ucqbutk',
        password: '****',
        database: 'ucqbutk'
    });

    // 连接到数据库
    connection.connect();

    // 执行SQL查询
    const sqlQuery = `SELECT multiplier FROM inflationcalculator WHERE year = '${yearSelect}' AND targetyear = '${targetyearSelect}'`;
    connection.query(sqlQuery, (error, results) => {
        if (error) {
            console.error('查询出错:', error);
        } else {
            // 处理查询结果
            if (results.length === 2) {
                const multiplier1 = results[0].multiplier;
                const multiplier2 = results[1].multiplier;
                const result = amount / multiplier1 * cmultiplier2;
                console.log(`计算结果: ${result}`);
            } else {
                console.log('未找到匹配的数据。');
            }
        }
    });

    // 关闭数据库连接
    connection.end();
}