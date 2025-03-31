let express=require('express');
const songRoutes = require('./routes/songRoutes');
const requestLogger = require('./middleware/requestLogger');
const connectDB = require('./config/db');
let app=express();
require('dotenv').config();

connectDB();

app.use(express.json())
app.use(requestLogger)
app.use("/api",songRoutes);

app.get("/", (req, res) => {
  res.send("🎵 Mood-Based Music Recommendation API is running!");
});

app.listen(process.env.PORT,()=>{
    console.log("Server running on "+process.env.PORT);
})