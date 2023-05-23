const fs = require("fs");

// IT WORKS ON NON BLOCKING IO NATURE
fs.readFile("file.txt" , "Utf8" , (err , data)=>{
    console.log(err , data);
}) 

// const a = fs.readFileSync("file.txt"); 
// console.log(a.toString());

// fs.writeFile("file2.txt" , "This is file 2" , ()=>{
//     console.log("written");
// })

fs.writeFileSync("file2.txt" , "this is updated file2")
console.log("we are reading file");