const express= require('express');
const app= express();

app.get('/home', (req, res)=>{
    res.send("home page get");
})


app.post('/home', (req, res)=>{
    res.send("home page post");
})


app.patch('/home', (req, res)=>{   
    res.send("home page patch");
})

app.put('/home', (req, res)=>{
    res.send("home page put");
})


app.delete('/home', (req, res)=>{
    res.send("home page del");
})



app.listen(1400);