// password:- pcy4AsakLj1lFNNQ
// username:- srohit3596
// Connection string :-  mongodb+srv://srohit3596:pcy4AsakLj1lFNNQ@cluster0.txrii.mongodb.net/

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require ('cors')
require('dotenv').config();
require('./models/db')
const AuthRouter = require('./Routes/AuthRoute')

const PORT = process.env.PORT || 8080;

app.get("/ping",(req,res)=>{
    res.send("PONG");
})

app.use(bodyParser.json)
app.use(cors())
app.use('/auth',AuthRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})