const axios = require("axios");
const express = require("express");

const PORT = 8080;

const app = express();

app.listen(PORT,()=>{
	console.log('Running this application on the port ${PORT}');
});

app.get("/",(req,res)=>{
	res.send({"status":"ok"});
});
	
app.get("/status",(req,res)=>{
	res.send({"status":"ok"});
});

