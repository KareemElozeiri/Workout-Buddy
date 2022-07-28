require("dotenv").config();

const express = require("express");
const mongoose =  require("mongoose");
const workoutRoutes = require("./routes/workouts");
//express app
const app = express();

//middleware
app.use((req, res, next)=>{
    console.log(`${req.method} : ${req.path}`);
    next();
});

//routes
app.use(express.json())
app.use("/api/workouts",workoutRoutes);

//db connection 
mongoose.connect(process.env.MONG_URI).then(()=>{
    // listen for requests 
    const port = process.env.PORT;
    app.listen(port,()=>{
        console.log(`DB connected successfully...listening on port ${port}...`);
    });
    }).catch((error)=>{
    console.log(error)}
    );


