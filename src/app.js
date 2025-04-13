const express = require("express");

const app = express(); //instance of expressjs application {web server}

app.listen(777, () => {
  console.log("Server listening on port 777");
});

// app.use("/user", (req, res) => {
//    //this function is konwn as route handler
//    //{use} means it can handle any type of method {GET, POST, ...}
//  //if We dont give any response from this server then postman infinitely sending request in infinite loop it also not stop for console.log 
//  //So we have to give res.send("Response!!"); for req
//     res.send("Response!!");
// });

//One route can have multiple route handler
//Now we have another parameter to do express js to move to another response otherwise it only move till 1st response
app.use("/user", (req, res, next) => {
    res.send("1st Response");
    //if I comment res.send() of 1st response then next() will go to 2nd response
    //If not comment then 1st response output and then 2nd route handler runs but throw error as cannot set headers after they are sent to client
    //TCP connection made b/w client(postman) server(app.js) open socket sends data closes connection postman got response but on our server code stills runs 2nd handler

    next();

    //If I use next() upper to res.send then firstly 2nd response done and then throw error
}, 
(req, res) => {
    //route handler 2
    res.send("2nd Response")
}
);

app.use("/route", rh1, [rh2, rh3], rh4); //wrapping inside array

//...........................Another Method for request Handler ...............................//
app.get("/hello", (req, res, next) => {
   console.log("hi1");
   next();
});
app.get("/hello", (req, res, next) => {
   console.log("hi2");
   res.send("hogya2");
});
//Ideally these functions are known as Middlewares and express js goes through method and route which matches with client request and 
//when any middleware had response it executes konwn as request handler and other termed as middlewares
//only job of express js is to take request give response as soon as possible

//These all are APIs as it way of connecting client to server

//Now it is tedious to again again check authorized of req in each requests so make a middleware to check generally we use {use} for all methods

const { adminAuth, userAuth } = require("./middlewares");

app.use("/admin", adminAuth);

app.use("/user/data", userAuth, (req, res) => {
    res.send("Deleted a User");
});

app.post("/user/login", (req, res) => {
    //for this i dont need to check userAuth
    res.send("USer logged in");
});

app.get("/user/getAllData", (req, res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a User");
});

app.get("/getUserData", (err, req, res, next) => {
    //if some error in code so that's why we write logic in try catch
    //generally we should write code in try catch
     try {
        //Logic of DB call and get user Data

        throw new Error("dkdkdkd");
        res.send("User Data Sent");
     }
     catch(err) {
         res.status(500).send("Some error contact support team");
     }

    //but still we have some unhandle errors
    //so then use below middleware
});

 //Always use try catch for error handling and keep this below middleware code in last of project for anyhow any error

app.use("/", (err, req, res, next) => {
      if(err) {
        //Log your error 
        res.status(500).send("something went wrong");
      }
});

//Order is very much important if this middlware on upper of get then nothing happen as of now no error thrown
//so only try catch will handle insidely the  error





