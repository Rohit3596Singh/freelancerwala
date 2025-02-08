const express = require('express');

const bodyParser = require('body-parser')
const cors = require ('cors')
require('dotenv').config();
require('./models/db')
const AuthRouter = require('./Routes/AuthRoute')
const AdminAuthRouter = require('./Routes/AdminAuthRoute')

const app = express();

const PORT = process.env.PORT || 8080;



app.use(cors(
    
))


app.use(bodyParser.json())

app.get("/ping",(req,res)=>{
    res.send("PONG");
})



app.use('/auth',AuthRouter);
app.use('/admin/auth', AdminAuthRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})