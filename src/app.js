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

app.use((req, res) => { //this fnc is req handler
     res.send("Hello from the server");
});

app.use("/hello", (req, res) => {
     res.send("Hello Hello");
});

app.use("/", (req, res) => {
     res.send("Hi I");
});

app.listen(3000, () => {
    console.log("I m Listening");
}); //{created web server on port 3000 and app is listening on server }


//By again close and start of server on terminal rid so do npm i -g nodemon
//If install one time it will install on global level and work on every projects so done one time {installed on system level}
//Now I have to only write {nodemon src/app.js} when run and it will automatically refresh server when code changes
//Now I can add in package.json scripts "start" "dev" or anyname to {npm run start/dev} method for me to run code











