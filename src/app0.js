//To run terminal write node src/app.js
// We will use Expressjs web framework for Nodejs for creating server
// step 1 {git init for package.json} step 2 {npm i express for expressjs}
//Now we will get node_modules and package-lock.json file
//Also in package.json dependencies came express due to npm i express
// "express": "^5.1.0"  by using this carat {^} our project automatically update to 5.x.x
//package-lock.json node_modules/express give actual version project running on

//Always close server on vs code and again run if done any changes in code close key {ctrl + c}

//Difference b/w caret and tilde (^ vs ~)

const express = require("express");

const app = express(); //instance of expressjs application {web server}

//Now if I give route {"/test"} to app.use then server will on port 3000 but only handle request which has {/test in it}

// app.use((req, res) => { //this fnc is req handler
//      res.send("Hello from the server");
// });

app.use("/hello", (req, res) => {
     res.send("Hello Hello");
});

// "/hello" this handler will be like wilcard match prefix if any match with it then it will overwrite and other req handler not work.
// also it match with only for "/hello/something" not "/hello123" as it will be different string
//order matters

// app.use("/", (req, res) => {
//      res.send("Hi I");
// });

app.listen(3000, () => {
    console.log("I m Listening");
}); //{created web server on port 3000 and app is listening on server }


//By again close and start of server on terminal rid so do npm i -g nodemon
//If install one time it will install on global level and work on every projects so done one time {installed on system level}
//Now I have to only write {nodemon src/app.js} when run and it will automatically refresh server when code changes
//Now I can add in package.json scripts "start" "dev" or anyname to {npm run start/dev} method for me to run code

//-------------------------------- HTTP METHODS -------------------------------------------------------------------------------------------

//When we type url on browser u are making GET {Request Method} API call to this route on server
//Browser is worst way to test ur APIs / to test ur Routes
//Use Postman for this {build, share APIs} In this we can made API calls just like browser
//Make workspace/collections/test API call

// app.use("/", (req, res) => {
//      res.send("Hi I");
// });
//--> If I have use use method then it will handle all http methods {get, post, delete...} overwrite as order maintain
//So make API req handler like this

app.get("/user", (req, res) => {
     console.log(req.query); //to read the query parameter {http://localhost:3000/user?userId=101&password=shiv}
     res.send({firstName : "Shiv", lastname : "Thakur"});
});

app.post("/user", (req, res) => {
     console.log("Shiv");
     //saving data to DB
   res.send("Data succesfully saved to the database");
});

app.delete("/user", (req, res) => {
    res.send("Deleted Successfully!");
});

//Advance Routing Concepts
//It will work for anything that ends with only fly {/butterfly, /camefly}
app.get("/.*fly$", (req, res) => {
    res.send({firstName : "Shiv", lastName : "Kumar"});
});
//colon means that its a dynamic route

app.get("/a/:userId/:name/:password", (req, res) => {
   console.log(req.params); //all parameters {http://localhost:3000/a/090/Akshay/kumar}
     res.send({firstName : "Shiv", lastName : "Kumar"});
 });
 













const express = require("express");
