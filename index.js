const http=require('http');
const fs=require('fs');
const path=require('path');
const express=require('express');
const server=express();

// now to printing data on the server side by reading it with the help of fs

const datar=fs.readFileSync('data.txt','UTF-8');
const abs=path.resolve('index.html');
console.log(abs);

server.get('/',(req,res)=>{
    console.log("enterd into server successfully");
    console.log(req.url)
    switch(req.url){
        case '/':
            // res.send(datar)
            res.send(abs)
            break;
        
        case '/demo':
            res.sendFile(path.join(__dirname, 'index.html')); // Use path.join to resolve the file path
            break;
    }
    
});



server.listen(3030,()=>{
    console.log("server started succesfully")
});