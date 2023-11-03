var express = require("express");
const fs = require("fs")
var app = express();
app.get("/",(req,res)=>{
    res.status(200);
    res.set("content-Type","text/html")
    res.write("<del>AdfAr RAshid</del>")
    res.write("<del>AdfAr RAshid</del>")
    res.write("<del>AdfAr RAshid</del>")
    res.write("<del>AdfAr RAshid</del>")
    res.end()
})
app.get("/adfar",(req,res)=>{
    res.set("content-Type","text/html")

    res.write("<del>Adfar Route</del>")
    res.write("<del>Adfar Route</del>")
    res.write("<del>Adfar Route</del>")
    res.end()
})
app.get("/about",(req,res)=>{
    res.set("content-Type","text/html")

    res.write("<del>Adelout Page</del>")
    res.write("<del>Adelout Page</del>")
    res.write("<del>Adelout Page</del>")
    res.end()
})
app.get("/contact",(req,res)=>{
    res.set("content-Type","text/html")
    res.write("<del>Contact wedelPage</del>")
    res.write("<del>Contact wedelPage</del>")
    res.write("<del>Contact wedelPage</del>")
    res.send()
})
app.get("/data",(req,res)=>{
    res.json([
        {
            id:1,
            name:"adfar"
        },
        {
            id:1,
            name:"adfar"
        },
        {
            id:1,
            name:"adfar"
        },
        {
            id:1,
            name:"adfar"
        },
        {
            id:1,
            name:"adfar"
        },
        {
            id:1,
            name:"adfar"
        },
        {
            id:1,
            name:"adfar"
        }
    ])
})
const index = fs.readFileSync("index.html","utf-8");
const adfarr = fs.readFileSync("adfar.txt","utf-8");
app.get("/index",(req,res)=>{
    res.send(index)
})
app.get("/adfarr",(req,res)=>{
    res.send(adfarr)
})
app.listen(4000,()=>{
    console.log("app is listening to port 4000")
})