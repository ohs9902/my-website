
const express = require('express');
const server = express();

server.use(express.static(__dirname+'/public'))
server.get('/',(req,res)=>{
    res.statusCode(200).sendFile(__dirname+"main.html");
});

server.listen(3026,()=>{
    console.log("the server is ....");
});
