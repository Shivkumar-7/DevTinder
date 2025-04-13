--> First we run {npm init} on terminal this made configuration json file {package.json} that git command made for us {this file is just like index of our project like notebook has index meta data associated to project} {thus initialized node project}

--> Now create src folder {any nomenclature} Inside it create app.js {starting point of application which is main JS file where write nodejs code} To run file {node src/app.js  what is nodejs program it just writing some piece of JS code nodejs take it and give to V8}

--> Now for Backend of Devtinder we need to create server to listen users requests
-->Now we will be using expressjs for creating server on nodejs application and run this application {project} 

--> WE do not push nodemodules in github bcaz from package.json and package.json anytime by {npm i} by dependencies in them we can install nodemodules
--> To tell git not track some folder changes make file on root of repo {.gitignore} now whatever path given inside it will ignore
--> To initialize git repo run {git init}
--> To commit changes {git add .} {{.} means all files on that changes area can also took one file {homework.md} are taken}
--> Now {git commit -m "message"} Now I have commit all code in master {main branch} now want to push all code to github {remote repo as i am on local repo}
--> Go to {github.com/new} Now want to push an existing repo from command line run codes {Happy All code on github Now}
--> difference b/w package.json vs package-lock.json