const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'cabas',
  database : 'cabas',
  port     : '3333'
});
 
// connection.query('SELECT * FROM place', function (error, results,) {
//     if (error) throw error;
    
    
//     console.log(results);

//   });

module.exports = connection;
