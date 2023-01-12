require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

const {PORT, MONGO_URI} = process.env;

// express app
const app = express();


// middleware 
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to DB
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log('db connected');
        // listen for requests
        app.listen(PORT, ()=>{
            console.log('connected to db and listening to port', PORT)
        })
    })
    .catch((err)=>{
        console.log('db', err)
    })

