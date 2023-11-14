let dbDevMsqlConfig;

//this commend is use for develop a envi

//Configure SQL database
dbDevMsqlConfig = {
  host: 'casa0017.cetools.org', // ip 
  user: 'ucqbutk', //username
  password: process.env.GITHUB_PASSWORD, // Set environment variable
  port: '3306', //port
  database: 'ucqbutk' //Database
};

module.exports = {
  dbDevMsqlConfig
}

