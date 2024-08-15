const http=require('http');
const fs=require('fs');
const express=require('express');
const server=express();
const bodyParser = require('body-parser');
const product = require('./controller/product.js');
// Middleware to parse JSON bodies
server.use(bodyParser.json()); // For parsing application/json

// Middleware to parse URL-encoded bodies (optional, if you're dealing with forms)
// server.use(bodyParser.urlencoded({ extended: true }));

// now to printing data on the server side by reading it with the help of fs

// const datar=JSON.parse(fs.readFileSync('data.txt','UTF-8'));

// const abs=path.resolve('index.html');
// console.log(abs);

// // const verify=(req,res,next)=>{
// //     console.log(req.query)
// //     if(req.query.password=='123'){
// //         res.send('Password get matched'
// //         )
// //         next()
// //     }else{
// //         req.sendStatus(404, 'password does not match')
// //     }

// // }

// // server.get('/',verify,(req,res)=>{
// //     console.log("enterd into server successfully");
// //     console.log(req.url)
// //     switch(req.url){
// //         case '/':
// //             // res.send(datar)
// //             res.send(abs)
// //             break;
        
// //         case '/demo':
// //             res.sendFile(path.join(__dirname, 'index.html')); // Use path.join to resolve the file path
// //             break;
// //     }
    
// // });

// server.get('/',(req,res)=>{
//     res.send(datar)
// })
// // this is to fetch data from product array by giving specific no.
// server.get('/products/:id',(req,res)=>{
//     const id=parseInt(req.params.id);
//     console.log(id);
//     const product=datar.find(p => p.id === id);
//     console.log(product)
//     res.send(product)
// })

// // To add new product in array we use post
// // for that we have to put data in the body section of postman to upload on the server 
// server.post('/createproducts',(req,res)=>{
//     console.log(req.body);
//     datar.push(req.body);
//     res.json(req.body)
   
// })


// // To update the specific product we can do one at a time we use put (this update whole the object)


// server.put('/updateproducts/:id',(req,res)=>{
//     // we have to put dynamic id to change the given id by the client 
//     // first fetching the id from the url 
//     const id=parseInt(req.params.id);
//     console.log(id)
//     // Since now we need noly the index of the object in the array so we use findIndex
//     const prodindex=datar.findIndex(p => p.id == id);
//     console.log(prodindex);
//     datar[prodindex]={...datar[prodindex],...req.body}
//     console.log(datar[prodindex])
//     res.send("data updated succesfully");

//     res.send(JSON.parse(datar[prodindex]))

// })



// // now patch 

// server.patch('/patchingproduct/:id',(req,res)=>{
//     const id=parseInt(req.params.id);
//     console.log(id);
//     const patchpro=datar.findIndex(p=> p.id===id);
//     console.log(patchpro);
//     datar.splice(patchpro,1,{...datar[patchpro],...req.body})
//     console.log(datar[patchpro]);
// })


// // now delete work 
// server.patch('/deleteproduct/:id',(req,res)=>{
//     const id=parseInt(req.params.id);
//     const deletproindex=datar.findIndex(p=> p.id==id);
//     console.log(deletproindex);
//     datar[deletproindex]={};
//     console.log(datar[deletproindex]);
// })



// server.listen(3030,()=>{
//     console.log("server started succesfully")
// });ṣ


// Now on the basis of MVC


server.get('/',product.getproducts)
.get('/getproductsbyid/:id',product.getproductsbyid)
.post('/postproducts',product.postproducts)
.put('/updateproducts/:id',product.updateproducts)
.patch('/patchproducts/:id',product.patchproducts)
.delete('/deleteproducts/:id',product.deleteproduct);


server.listen(3030,()=>{
    console.log("server created successfully")
}
)