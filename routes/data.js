const express= require('express');
const routes =express.Router();
const path=require('path');

routes.get('/form-login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../',"views","data.html"))
})
 
routes.post('/form-login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../',"views","data.html"))
})


module.exports =routes;