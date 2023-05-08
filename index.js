//import express

const exp=require('express')

//app creation

const app=exp()

//port set to run

app.listen(3000,()=>{
    console.log("server started at port 3000");
})