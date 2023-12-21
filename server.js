const express=require("express");


const app=express();
app.set("view engine","ejs");
app.use("/user", require("./routes/user"));
app.listen(1920, (err)=>err?console.log(err):console.log("th server is working"));