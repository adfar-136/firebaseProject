const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { User } = require("./database");
const passport = require("passport");
const {initialisePassport,isAuthenticated} = require("./passportconfig");
const expressSession = require("express-session");
initialisePassport(passport);
app.use(expressSession({secret:"secret",resave:false}))
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("home")
})
app.post("/register",async (req,res)=>{
    const user = await User.findOne({username:req.body.username})
    if(user){
        return res.status(400).send("user already Registered")
    }
    const newUser= await User.create(req.body);
    res.status(201).send(newUser)
})
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/profile');
  });
app.get("/profile",isAuthenticated,(req,res)=>{
    const user = req.user;
    res.render("profile",{user})
})
 app.get("/login",(req,res)=>{
    res.render("login")
 })
 app.get("/logout",(req,res)=>{
     req.logOut(()=>{

     })
     res.redirect("/")
 })
 
app.get("/register",(req,res)=>{
 res.render("register")
})
app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})