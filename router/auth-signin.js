// const { response } = require("express")
const express = require("express")
const mongoose = require("mongoose")
const Router = express.Router() 
const USER = mongoose.model("USER")


Router.post("/signin",(req,res)=>{
    console.log("someone called signin");
    let UserName = req.body.UserName
    let Password = req.body.Password
    USER.findOne({UserName:UserName}).then((savedUser)=>{
        if(savedUser){
            let actualPass = savedUser.Password
            let UserObjectId = savedUser._id
            let UserName = savedUser.UserName
            let Email = savedUser.Email
            if(actualPass == Password){
                res.status(200).json({err:"noError",Email,UserName,UserObjectId})
                console.log("pass asli wale password se mil gaya");
            }else{
                res.status(200).json({err:"passwordNotMatched"}) ;
                console.log("pass asli password se nahi mila");
            }
        }else{
            res.status(200).json({err:"userNotFound"})
            console.log("uesr hi nahi mila database me");
        }
    })
})
module.exports = Router ;