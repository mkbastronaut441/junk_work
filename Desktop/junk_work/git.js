const express=require("express");


const app=express();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index");
});
app.listen(4000,()=>{
    console.log(`server is listening at http://localhost:4000 `);
})