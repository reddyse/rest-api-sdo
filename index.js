const axios = require("axios");
const express = require("express");

const PORT = 8081;

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/otp/check", function(req, res) {
  const user = req.body.user;
  const code = req.body.otp;

  res.send({
    'user': user,
    'code': code,
	'valid': true
  });
});

app.post("auth/status", function(req, res) {
  const user = req.body.user;
  const pass = req.body.pass;

  res.send({
    'user': user,
    'code': pass,
	'status': 'approved'
  });
});

