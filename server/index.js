

const express = require('express');

const bodyParser = require('body-parser')
const cors = require ('cors')
require('dotenv').config();
require('./models/db')
const AuthRouter = require('./Routes/AuthRoute')

const app = express();

const PORT = process.env.PORT || 8080;



app.use(cors(
    
))
// app.use(cors(
//     {
//         // origin: ["http://localhost:5173","https://freelancerwala-9xw4.vercel.app","*"],
//         origin: ["https://freelancerwala-9xw4.vercel.app"],
//         // origin: "*",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         credentials: true, // Allow cookies/authentication headers
//       }
// ))

app.use(bodyParser.json())

app.get("/ping",(req,res)=>{
    res.send("PONG");
})



app.use('/auth',AuthRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})