const express=require("express");
const app=express();

app.get("/",(req,resp)=>{
    resp.sendFile("./public/course.html",{root:__dirname});
})

app.listen(9000);

console.log("Server is Running At port 9000");