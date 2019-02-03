var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost:5432/logindetails";

var client = new pg.Client(conString);

client.connect(err =>{
    if(err ) throw err;
    console.log("connected");
});

var username ="avinash"
var password= "123";

client.query("select * from user1 where username = $1 and password = $2",[username,password], (err,data,field) => {
    if(err) throw err;
    console.log("username : " +data.rows[0].username+ " password : "+data.rows[0].password);
    var user_name = data.rows[0].username;
    var pass_word = data.rows[0].password;
    if(username ===user_name && password ===pass_word){
            console.log("logined ");
    }else{
        console.log("user not fouond");
    }
});





// Inserting data
//client.query("insert into emp values(1, 'avinash', 'biw', 10000)"); 




// const q1 = "select * from emp where salary < 30000"

// client.query(q1, (err, data, field)=> {
//     if(err) throw err;
//     //console.log("DATA", data.rows);
//     for(let i=0;i<data.rows.length;i++)
//     {
//         console.log("emp_name : ", data.rows[i].emp_name +"   c_name : "+ data.rows[i].c_name +"   salary : "+ data.rows[i].salary);
//     }

// });

// Name: naam Company: naam Salary <30000