// password:- WDtwanKg0vYkv5Er
// username:- srohit2806
// Connection string :-  mongodb+srv://<db_username>:<db_password>@cluster0.dx2wa.mongodb.net/

const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.get("/ping",(req,res)=>{
    res.send("PONG");
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})