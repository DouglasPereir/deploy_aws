const { response } = require('express');
const express = require('express');

const app = express();

// app.get("/", (req, res) => res.send("Hello World"));

app.get('/', (req, res) => {
    return response.json({message: 'Server is up'});
})

app.post('/teste',(req, res) => {
    const {name, date} = req.body;

    return response.json({name, date});
})

app.listen(3333);