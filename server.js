const express = require('express');
const app = express ();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get('/', (req,res)=>{
    res.sendFile(__dirname +"/index.html")
})

app.post('/create',(req,res)=>{
    console.log("CREATE REQ.BODY", req.body)
    res.send("TEST FAIL")
})

app.listen('3000',()=>{
    console.log("Listening on 3000")
})