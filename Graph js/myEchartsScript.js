
// The next step is to use the SQL into the echarts

const echarts = require('echarts');
const mysql = require ('mysql')

// Connect to MySQL database
const connection = mysql.createConnection({
    host: 'casa0017.cetools.org',
    user: 'ucqbutk',
    password: 'zahugufelu',
    database: 'inflationcalculator'

});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:' + err.stack);
      return;
    }
    console.log('Connected to database');
});
    // define sql query to retrieve data pur website need
  app.get('/echartsData', (req,res) => {
    const sqlQuery = 'SELECT year, country FROM inflationcalculator'; //This part is to edit and indicate our groups data table
    //Execute the SQL query to get data
    connection.query(sqlQuery, (error, results) => {
      if (error) {
        console.error('Error excuting query:' + error);
        res.status(500).send('Error retrieving data from database')
      } else {
        res.send(results);
      }
    });
  });
    app.listen(3000,( =>{
      console.log('server is running on port 3000');
  }) ;
   
    

    //Porcess the retrieved data to fit Echarts requirements
      const processedData = processDataForEcharts(results);
    
    //-----------------------------Create charts-----------------------------------------------------------------------------------------------------------------------
    fetch('/echartsData')

    // initialize echarts
    var myChart = echarts.init(document.querySelector('#Graph1'));
      .then(response => response.json())
      .then(data => {
    
    // Configure the chart by using our data
    var option = {
      legend: {
          orient: 'vertical',
          right: 10,
          top: 'center'
      },
      // data
      dataset: {
          source: processedData
           [
              ['Country', 'France', 'UK', 'Italy', 'Germany'],
              ['1960', 4.1399, 5, 2, 1, 8] 
              
          ]
      },
      xAxis: {
         type: 'category',
         data: processedData.categories
      },
      yAxis: {
        type: 'value'
      },
      series: [
          { 
            data:processedData.values,
            type: 'bar'
          }
      ]
    };
 
//set the option to the chart
myChart.setOption(option);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//function to process the retrieved data for Echarts
function processDataForEcharts(data) {
  //Process the data from the database for Echarts here
  return{
    categories:data.map(item => item.year),
    values:data.map(item => item.country)
  };
}

//close the database connection after querying
//connection.end();


// API Endpoint to get data from MySQL
// app.get('/data-from-mysql', function (req, res) {
// array on sql 