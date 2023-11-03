var express = require("express");
var app =express();
var students = require("./initialData");
const bodyParser = require("body-parser");
app.use(bodyParser.json())
let currentID =students.length 
app.get("/api/students",(req,res)=>{
    res.json(students)
})
app.get("/api/students/:id",(req,res)=>{
    let id = req.params.id;
    if(!isNaN(id)){
        id = parseInt(id);
        let stdObject = students.find((item)=>{
            return item.id === id;
        })
        if(stdObject===undefined){
             res.sendStatus(404);
        }else{
            res.json(stdObject)
        }
    }
    else{
        res.sendStatus(400);
    }
})
app.post("/api/students",(req,res)=>{
 let reqKeys = Object.keys(req.body);
 if(reqKeys.find((e)=>{return e === "name"}) && 
 reqKeys.find((e)=>{return e === "currentClass"}) && 
 reqKeys.find((e)=>{return e === "division"})) {
           if(!isNaN(req.body.currentClass)){
            let name = req.body.name;
            let currentClass = req.body.currentClass;
            let division = req.body.division;
            currentID++;
            students.push({id:currentID,name:name,currentClass:currentClass,division:division})
            return res.json({id:currentID})
           }
           else{
            res.sendStatus(400)
           }
 }
 else{
    res.sendStatus(400)
 }
})
app.put("/api/students/:id",(req,res)=>{
    if(!isNaN(req.params.id)){
        let id = parseInt(req.params.id);
        let oldStudent = students.find((item)=>{
            return item.id === id;
        })
        if(oldStudent === undefined){
            return res.sendStatus(404)
        }
        else{
            let updateObj = req.body;
            if(Object.keys(updateObj).find((e)=>{
                return e === "currentClass"
            })){
                if(!isNaN(updateObj.currentClass)){
                    updateObj.currentClass = parseInt(updateObj.currentClass)
                }
                else{
                    return res.sendStatus(400)
                }
            }
            else{
                return res.sendStatus(400)
            }
        let std = {...oldStudent,...updateObj};
        const index = students.indexOf(oldStudent);
        students.splice(index,1);
        students.push(std);
        res.send("put successfuly")
        }  
    }
})
app.delete("/api/students/:id",(req,res)=>{
    if(!isNaN(req.params.id)){
        let id = parseInt(req.params.id);
        let oldStudent = students.find((item)=>{
            return item.id === id;
        })
        if(oldStudent === undefined){
            return res.sendStatus(404)
        }
        else{
            const index = students.indexOf(oldStudent);
            students.splice(index,1);
            res.send("delete successfuly")
        }  
    }
})
app.listen(5000,()=>{
    console.log("Hello")
})