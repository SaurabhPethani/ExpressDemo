const express = require('express');

const app = express()

app.get("/", (req, res) => {
    res.send('<h1>Hello</h1>')
})


// middleware
// app.use(function)

// separate routes for each use case like login, users
// function(req, res) => { } 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`))