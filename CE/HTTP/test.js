const http=require('http');
const fs=require('fs/promises');
const server=http.createServer(async(req,res) => {
 if(req.url=='/'){
    res.writeHead(200,{'Content-Type':'application/json'});
    const data = await fs.readFile("./aa.json", "utf-8")
    res.end(data);
 }
 else if(req.url=='/Home'){
    res.writeHead(200,{'Content-Type':'text/html'});
    const data =await fs.readFile("./Home.html",
        "utf-8");
    res.end(data);
 }
 else{
    res.writeHead(200,{'Content-Type':'text/html'});
    const data2 = await fs.readFile("./error.html",
        "utf-8");
    res.end(data2);
 }
//  const filedata=await fs.readFile("./aa.json",'utf8');
//  const parsedata=JSON.parse(filedata);
//  const newdata=user.map( (user) => {
//          return user.name
//  })
//    res.end(JSON.stringify(parsedata));
});
 
PORT=3000;
server.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
});