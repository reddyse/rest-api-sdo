const axios = require("axios");
const express = require("express");

const PORT = 8080;

const app = express();

app.listen(PORT,()=>{
	console.log('Running this application on the port ${PORT}');
});

app.get("/imprivata/auth/",(req,res)=>{
	res.send("Hello there!!");
});