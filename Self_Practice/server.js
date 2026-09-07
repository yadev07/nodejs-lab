const express = require('express');
const server = express(); 
const PORT = process.env.PORT || 5000;

server.use(express.json());

server.get('/', (req, res)=>{
    res.json({message: "You are in HomePage"});
});

server.listen(PORT, ()=>{
    console.log('Server running on localhost:3000');
});