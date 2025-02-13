const http=require('http');
const fs=require("fs/promises");
const server =http.createServer(async (req,res)=>
{
    console.log(req.url);
    res.statuscode=200;
    
res.setHeader('Content-Type','text/html');
res.write("hello,World!");
const data =await fs.readFile("./Home.html",
    "utf-8");
res.end(data);
});
PORT=3000;
server.listen(PORT,()=>{
console.log(`server is running on port ${PORT}`);
})
