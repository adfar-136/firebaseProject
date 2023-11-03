const path = require("path");
// console.log(path)
// console.log(path.dirname('C:/Users/LEGION/Desktop/Nov/BackENd Node/path/adfar.html'))
// console.log(path.extname('C:/Users/LEGION/Desktop/Nov/BackENd Node/path/adfar.html'))
// console.log(path.basename('C:/Users/LEGION/Desktop/Nov/BackENd Node/path/adfar.html'))

// const parsePath = path.parse('C:/Users/LEGION/Desktop/Nov/BackENd Node/path/adfar.html');
// console.log(parsePath)
const formatPath = path.format({
   
    dir:'E:/users/adfar',
    base: 'nov.txt',
    
})
console.log(formatPath)