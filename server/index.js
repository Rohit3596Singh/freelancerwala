const express = require('express');

const bodyParser = require('body-parser')
const cors = require ('cors')
require('dotenv').config();
require('./models/db')
const AuthRouter = require('./Routes/AuthRoute')
const AdminAuthRouter = require('./Routes/AdminAuthRoute')
// const uploadRoutes = require('./Routes/uploadRoute');
const productRoutes = require('./Routes/productRoute');
const orderRoutes = require('./Routes/orderRoutes');
const notifications = require('./Routes/NotificationRoute');
const email = require("./Routes/sendEmail")


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
// app.use("/uploads", express.static("uploads"));
// app.use('/api', uploadRoutes);
app.use('/api', productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/notifications", notifications);
app.use("/api/email", email);

app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
      console.log(r.route.path);
    }
  });
  



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})