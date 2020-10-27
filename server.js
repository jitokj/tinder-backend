const express = require('express');
const mongoose = require('mongoose');

//App config

const app = express();
const port = process.env.PORT || 8002;

//API endpoint

app.get("/",(req,res)=>{
    res.status(200).send("hello from server");

});

//listener
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})