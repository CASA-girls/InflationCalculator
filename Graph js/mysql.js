
let dbDevMsqlConfig;

//this commend is use for develop a envi

// mysql 和 node js mysql Referenced from:
//https://blog.csdn.net/m0_59962820/article/details/129389947

//Configure SQL database
dbDevMsqlConfig ={
    host     : 'casa0017.cetools.org', // ip 
    user     : 'ucqbutk', //username
    password : '*******', //Passcode
    port     :  '3306', //port
    database :  'ucqbutk' //Database
  };

module.exports={
    dbDevMsqlConfig
}

