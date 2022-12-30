const express = require ('express');
const cors = require ('cors');
const fileupload = require ('express-fileupload');
const bodyparser = require ('body-parser');
const mysql = require ('mysql');


const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static('public'));

let conn=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Mysql@1045",
    databse:"login"
})

conn.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Database Connected");
    }
})

app.post("/Register",(request,response)=>{
    let {firstname,lastname,phone,email,password} = request.body;

    let sql = 'insert into register(firstname,lastname,email,phone,username,password) values(?,?,?,?,?,?)';

    conn.query(sql,[firstname,lastname,email,phone,phone,password],(error,result)=>{
        if(error){
            let s={"status":"error"};
            response.send(s);
        }
        else{
            let s={"status":"success"};
            response.send(s);
        }
    })

})

app.listen(3002,()=>{
    console.log("port is runnin in 3002");
})