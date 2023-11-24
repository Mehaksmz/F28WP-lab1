
const express= require('express');
const mysql =require('mysql');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});
const path = require('path');
const cookieParser = require('cookie-parser');
const app= express();
app.set('view engine', 'hbs');
const port=3000;
app.use(cookieParser());

const db= mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error)=>{
    if (error){
        console.log(error);
    }else {
        console.log('Mysql Connected...');
    }
});
const publicDirectory= path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.set('view-engine','hbs');
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

//define routes
app.use('/',require('./routes/pages'))
app.use('/auth', require('./routes/auth'));

app.listen(port,()=>{
    console.log(`Server started on port ${port}.`);
});