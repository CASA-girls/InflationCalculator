//Information about the database needs to be hidden when uploading to Github

let dbDevMsqlConfig;

dbDevMsqlConfig = {
    host: 'casa0017.cetools.org',
    user: 'ucqbutk',
    password: process.env.MYSQL_PASSWORD, // Set environment variable
    port: '3306',
    database: 'ucqbutk'
};

module.exports = {
    dbDevMsqlConfig
}