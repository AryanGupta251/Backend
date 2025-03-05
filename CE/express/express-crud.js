import express from "express"; 
const user=[{
    id:1,
    name:"Aryan",
    age:30
}]
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    // res.send("Server is sending this data");
    res.send(user);
});
app.use(express.json());   //app.use is a fucntion which load the middleware

app.post("/api/createUser",(req,res)=>{

    const {name,age}=req.body;
    const newid=user.length>0?user[user.length-1].id+1:1;
    // const bodydata=req.body;
    // console.log(bodydata);
    user.push({id: newid,name,age});
    res.send("new user is created successfully")

    // res.send("This is post request data from the server");
});
app.get("/api/User/:id",(req,res)=>{

    const {id}=req.params;
    const User=user.find(user=>user.id==id);
    res.send(user);
});
app.patch("/api/updateUser/:id",(req,res)=>{

    const {id}=req.params;
    const {name}=req.body;
    const index=user.findIndex(user=>user.id==id);
    user[index].name=name;
    res.send("user is updated successfully");
});
app.delete("/api/deleteUser/:id",(req,res)=>{

    const {id}=req.params;
    const index=user.findIndex(user=>user.id==id);
    user.splice(index,1);
    res.send("user is updated successfully");
});
app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
  
});
