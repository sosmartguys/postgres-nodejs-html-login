const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
var app = express();

// create connection
const conString = "postgres://postgres:postgres@localhost:5432/logindetails";
var client = new pg.Client(conString);

client.connect(err => {
    if(err) throw err;
    console.log("connected");
})


// body parser
app.use(bodyParser.urlencoded({ extended: false }))
//app.use();

app.post('/', (req, res) => {
    console.log("BODY", req.body);
    var userName = req.body.username;
    var pass = req.body.password;
    // logic for login
    client.query("select * from user1 where username = $1 and password = $2",[userName, pass], (err,data,field) => {
            if(err) throw err;
                var user_name = data.rows[0].username;
                var pass_word = data.rows[0].password;
                    if(userName === user_name && pass === pass_word){
                        console.log("login successful");
                        res.send('<h1>welcome '+userName+'</h1>')
                    }else{
                        console.log("username and password does not match");
                        res.send('<h1>invalid user</h1>')
                    } });

        // send response to user login success...
    })

    // www.localhost:3000/

    app.listen(3000, () => {
        console.log("Listening to port 3000");
    });