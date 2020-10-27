const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const cards= require("./dbCards");

//App config

const app = express();
const port = process.env.PORT || 8002;
const Connection_url ="mongodb+srv://admin:Q6ER2pPNfuNLrRgf@cluster0.k9xfi.mongodb.net/tinderDb?retryWrites=true&w=majority"

app.use(express.json());
app.use(Cors());

//API endpoint

app.get("/",(req,res)=>{
    res.status(200).send("hello from server");

});

app.post("/tinder/cards",(req,res)=>{
    const dbCard = req.body;
    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
})

app.get("/tinder/cards",(req,res)=>{
    cards.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    })
})

//db connection

mongoose.connect(Connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((_)=>{
    app.listen(port,()=>{
        console.log(`listening on http://localhost:${port}`);
    })
})
.catch((err)=>{
    console.log(err);
})

//listener
