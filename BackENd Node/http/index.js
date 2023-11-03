// var http  = require("http");
// http.createServer((request,response)=>{
//     console.log(request)
//      response.write("<h1>Adfar Rashid</h1>")
//      response.end()
// }).listen(4000)
var http  = require("http");
var fs = require("fs");
var home = fs.readFileSync("./index.html","utf-8");
var contact = fs.readFileSync("./contact.html");
var blog = fs.readFileSync("./blog.html");
var about = fs.readFileSync("./About.html");
const server = http.createServer((req,res)=>{
  if(req.url==="/"){
    res.end(home)
  } else if(req.url === "/contact"){
    res.end(contact);
  } else if(req.url === "/blog"){
    res.end(blog);
  } else if(req.url === "/about"){
    res.end(about)
  } else {
    res.end("<h1>Go to home page</h1>")
  }
})
server.listen(3000,()=>{
    console.log("Server is running")
})