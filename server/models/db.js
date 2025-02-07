const mongoose = require ("mongoose");

const mongo_url = process.env.MONGO_CONN

// mongoose.connect(mongo_url)
//     .then(()=>{
//         console.log("MongoDB Connected")
//     }).catch((err)=>{
//         console.log("MongoDB Connection Error", err);
//     })



mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Stop the server if DB connection fails
    });

mongoose.connection.on("connected", () => {
    console.log("🚀 Connected to MongoDB!");
});

mongoose.connection.on("error", (err) => {
    console.error("⚠️ MongoDB Connection Error:", err);
});

  
