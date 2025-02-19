const http=require('http');
const port=3000;
const server=http.createServer(async(req,res)=>{
    console.log('New request recieved');
    res.writeHead(200,{'Content-Type':'application/json'});
    const response=await fetch("https://dummyjson.com/products")
    const data=await response.json();
    res.end(JSON.stringify(data));
    
});

server.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
    
});