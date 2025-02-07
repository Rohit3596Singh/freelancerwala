

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

app.use(bodyParser.json())

app.use(cors(
    {
        origin: ["http://localhost:5173", "https://freelancerwala-9xw4.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true, // Allow cookies/authentication headers
      }
))

app.use('/auth',AuthRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})