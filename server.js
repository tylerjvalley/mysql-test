const express = require('express');
const mysql = require('mysql');


//Create connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Ilikepineapples1',
    database : 'People'
});


db.connect((err) => {
    if (err) {
         throw err;
    }
    console.log('MySQL connected');
});

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM users';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.json(results);
    })
})

app.listen('3000', () => {
    
    console.log('server started on port 3000');
});

