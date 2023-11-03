const express = require("express");
const app = express();
const path = require("path")
console.log(path.__dirname)
app.use("/static",express.static(path.join(__dirname,"./public")))
app.use("/adfar",express.static(path.join(__dirname,"./public/adfar.html")))
app.listen(5000,()=>{
    console.log("app is listening to port 4000")
})