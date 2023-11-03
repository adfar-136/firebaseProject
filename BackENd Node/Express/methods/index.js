var express = require("express");
var app = express();
var students = require("./Students");
app.use(express.json())
app.get("/api/students",(req,res)=>{
   res.json(students)
})
app.post("/api/students",(req,res)=>{
     const stu = {
        id:students.length+1,
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
     }
     students.push(stu);
     res.json(stu);
});
app.put("/api/students/:id",(req,res)=>{
   let id = req.params.id;
   let index = students.findIndex((student)=>{
       return (student.id === Number.parseInt(id))
   })
   if(index >= 0){
    let item = students[index]
    item.first_name=req.body.first_name;
    item.last_name = req.body.last_name;
    item.email = req.body.email;
    res.json(item)
   }

})
app.delete("/api/students/:id",(req,res)=>{
    let id = req.params.id;
   let index = students.findIndex((student)=>{
       return (student.id === Number.parseInt(id))
   })
   if(index>=0){
    let item = students[index];
    students.splice(index,1);
    res.json(item)
   }
})
app.listen(4000,()=>{
    console.log("listening to port 4000")
})