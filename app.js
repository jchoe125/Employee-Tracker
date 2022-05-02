const express = require('express');
const app = express();
const mysql = require('mysql2');
const PORT = 3000;
const cTable = require('console.table');

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', (req, res) => {
    res.send("This is the home page!")
})

//LISTENING to server
app.listen(3000);