const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"] // update if you change client port
}

app.use(cors(corsOptions));

// Imports database
const db = require('./db');

app.get("/", (req, res) => {
 
    res.send("backend working");

})

app.listen(8080, () => {
    console.log("Server started on port 8080");
})

// Insert to db
/*
app.post("/insert", (req, res) => {

    

})
*/

// Delete from db
/*
app.post("/insert", (req, res) => {

    

})
*/

// Edit db
/*
app.post("/insert", (req, res) => {

    

})
*/