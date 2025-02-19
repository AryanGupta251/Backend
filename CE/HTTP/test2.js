const http=require('http');
const axios = require('axios');
const port=3000;
const server=http.createServer(async(req,res)=>{
    console.log('New request recieved');
    res.writeHead(200,{'Content-Type':'text/html'});
    const response=await axios.get("https://api.github.com/search/users?q=location:ghaziabad")
    const userimg=response.data.items;
    let frontdata=`<html><head></head><body>`
    userimg.forEach((items)=>{
        frontdata+=`<div><img src="${items.avatar_url}"></div>`
    });
    frontdata +=`<body></html>`
    res.end(frontdata);
    
});

server.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
    
});