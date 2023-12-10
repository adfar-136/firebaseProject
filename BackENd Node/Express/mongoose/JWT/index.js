const express = require("express");
const passport = require("passport");
const app = express();
const {User} = require("./database")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser");
const { hashSync, compareSync } = require("bcrypt");
app.use(bodyParser.json());
require("./passportconfig")
app.use(passport.initialize())
app.get("/",(req,res)=>{
    res.send({message:"Welcome to our API"});
});
app.post("/register",async (req,res)=>{
   const user1 = await User.findOne({username:req.body.username})
   if(user1){
    return res.status(400).send("User already exists")
   }
   const user2 = new User({
    username:req.body.username,
    password:hashSync(req.body.password,10)
   })
   user2.save().then(()=>{
    res.send({message:"Registered Successfully"})
   }).catch((err)=>{
    res.send({succues:"false",error:err})
   })
})
app.post("/login",(req,res)=>{
    User.findOne({username:req.body.username}).then((user)=>{
        if(!user){
            return res.status(400).send("bad request")
        }
        if(!compareSync(req.body.password,user.password)){
           return res.send("password incorrect")
        }
        const payload = {
            username:user.username,
            id:user.id
        }
        // console.log(payload)
        const token = jwt.sign(payload,"secret",{expiresIn:"2d"});
        return res.status(200).send({
            success:true,
            message:"Authenticated successfully",
            token:"Bearer " + token
        })
    })
})
app.get('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user.username);
    }
);
app.listen(4000,()=>{

    console.log("listening to port 4000")
});