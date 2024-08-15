const http=require('http');
const fs=require('fs');
const express=require('express');
const bodyParser = require("body-parser");
const  server= express();
const path=require('path');
server.use(bodyParser.json()); // For parsing application/json

const datar=JSON.parse(fs.readFileSync('data.txt','UTF-8'));


// tp fetch
exports.getproducts=(req,res)=>{
    res.send(datar);

}

// to fetch by the id
exports.getproductsbyid=(req,res)=>{
    const id=parseInt(req.params.id);
    const product=datar.find(p=>p.id==id);
    console.log(product);
    res.send(product);
}

// to post 

exports.postproducts=(req,res)=>{
    console.log(req.body)
    datar.push(req.body);
    res.json(req.body);  
    // this is to print data from body
}

// to update
// put

exports.updateproducts=(req,res)=>{
    const id=parseInt(req.params.id);
    const productindex=datar.findIndex(p=>p.id==id);
    datar[productindex]={...datar[productindex],...req.body};
    console.log(productindex);
    res.send(datar[productindex]);
    
}

// to update
// patch

exports.patchproducts=(req,res)=>{
    const id=parseInt(req.params.body);
    const productindexp=datar.findIndex(p=>p.id==id);
    datar.splice(productindexp,1,{...datar[productindexp],...req.body});
    console.log(JSON.parse(datar.productindexp));

}

// delete 

exports.deleteproduct=(req,res)=>{
    const id=parseInt(req.params.body);
    const productindexd=datar.findIndex(p=>p.id==id);
    datar[productindexd]={};
}

