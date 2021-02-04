const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var connection = mysql.createPool({
    host : "db4free.net",
    user : "pie_user",
    password : "Password",
    database : "apps_database",
    port : 3306,
    multipleStatements : true
});


connection.query("select * from table1",(err,result)=>{
    if(!err){
        console.log(result);
    }
    else{
        console.log(err);
    }
})

app.listen(5000);