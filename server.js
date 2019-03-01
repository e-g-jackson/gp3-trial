// const $ = require('jquery');
const express = require('express');
const Router = express.Router()
const path = require('path');
// const mongojs = require('mongojs');
const mongoose = require('mongoose');
var logger = require('morgan');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WellnessTracker";
// const GOOGLY_API = process.env.GOOGLY_API;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger("dev"))

mongoose.connect(MONGODB_URI);

const dbRoute = require(path.join(__dirname, "./models/"))

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.get('/api/books', (req, res) => {
//     dbRoute.find({}, function(err, result) {
//         if(err){
//             throw err;
//         } else {
//             res.json(result)
//         }
//     })
// })

app.post('/db/food', (req, res) => {
    dbRoute.create(req.body).then(data =>{
        res.send("Food entry received!")
    }).catch(err => {throw err;})
})

// app.delete('/api/books/:id', (req, res) => {
//     const bookId = req.params.id
//     dbRoute.deleteOne({"id": bookId}, function(error, data){
//         if (error) throw error;
//         res.send('Book Deleted!')
//     })
// })

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})