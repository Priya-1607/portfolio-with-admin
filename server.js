// import express from 'express';
const express=require('express')

const app=express();
require("dotenv").config();
const dbConfig=require("./config/dbConfig")
const portfolioRoute=require("./routes/portfolio-routes.js");
app.use(express.json());
app.use('/api/portfolio',portfolioRoute)
const port=process.env.PORT || 5003
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})

// // server.js

// const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');

// const app = express();
// const dbConfig=require("./config/dbConfig")
// Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB Connection
// mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// // // Routes
// // app.use('/api/projects', require('./routes/projects'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
