// import statements
const express = require("express");

// config


// server init
const server = express();


//server middleware
server.get("/", (req, res) => {
    res.send("hey users welcome to the our website");
})

server.get("/user", (req, res) => {
    res.send("hey hello kartik welcome to the our website");
})

server.get("/user/:name", (req, res) => {
    console.log(req.params);
    res.send(`hey hello ${req.params.name}`);
})

server.get("/userDetails", (req, res) => {
    console.log(req.query);
    res.json(req.query);
})


//server routes


//server start
server.listen(8000, () => console.log("Server is Running On Port 8000"))


// Status Codes

// Successfull
// 200 (ok) (Automatic)
// 201 (ok, created) (manual)
// 304 (Not Modified) (Auto)

// failure
// 400 (Bad Request) -You have fail to pass the some inportant data from the FE or origin.
// 401 (Unauthorised) (Manual) -You have failed to pass the correct credentials.
// 403 (Forbidden) (Manual) -Role is not matched.
// 404 (Not Found) (Auto) -service is not exist on the server.
// 423 (Service is locked) - When we encounter the too many request within x period of time.
// 500 (Internal server error) (Manual) -Whenever your code is broken on server.