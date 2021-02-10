const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'Ilikepineapples1',
    user: 'root',
    database: 'People',
    host: 'localhost',
    port: '3306'
})

let PeopleDB = {};

PeopleDB.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM People`, (err, results) => {

            if (err) {
                return reject(err);
            }

            return resolve(results);
        })
    })
};

module.exports = PeopleDB;