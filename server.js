const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
// var cors = require('cors')
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
// app.use(cors)

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
});
connection.connect();

app.get('/api/post_list', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    connection.query(
        "SELECT * FROM POSTING",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});
// server와 browser가 연결될때까지 기다리는 것
app.listen(3000, () => console.log('listening on 3000'))