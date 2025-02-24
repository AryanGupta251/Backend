import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.send('hello bachho!');
});
app.get('/api',(req,res)=>{
    const data=req.query;
    res.send(`Hello Mr. ${data.name} and your roll number is ${data.rollno}`);   
});

const port=3000;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});
