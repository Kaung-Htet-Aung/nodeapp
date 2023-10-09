
const express = require('express');
const db = require('./db');
const dotenv=require('dotenv')


const app=express();

dotenv.config()
app.get('/',(req,res)=>{
   res.send("HI")
})
app.get('/data',(req,res)=>{
    const q='select * from nodetest';
    db.query(q,(err,data)=>{
        if(err) res.status(404).json(err)
        res.status(200).json(data)
    })
 })
 const port =process.env.PORT || 3000
 
app.listen(port,()=>{console.log(`server is running on port ${port}`)})