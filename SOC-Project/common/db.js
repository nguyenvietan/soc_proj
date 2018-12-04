const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'soc-project',
    password: 'soc1234',
    database: 'soc-project'
});
connection.connect();
module.exports=connection;
