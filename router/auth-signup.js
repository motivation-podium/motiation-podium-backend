const express = require("express")
const Router = express.Router()
const mongoose = require("mongoose")
let USER = mongoose.model("USER")
// const USER = mongoose.model("USER")


Router.post("/signup",(req,res)=>{
    let Name = req.body.Name
    let UserName = req.body.UserName
    let Email = req.body.Email
    let Password = req.body.Password
    let Mobile = req.body.Mobile
    function errInsufficientInfo() {
        res.status(200).json({err:"Insufficient Information",insufficient:"true",alredyExist:"false"})
    }
    function validate() {
        USER.findOne({UserName:UserName}).then((userFindStatus)=>{
            if(userFindStatus){
                return res.status(200).json({err:"Already Exist",insufficient:"false",alredyExist:"true"})
            }
            else{
                const newuser = new USER({
                    Name,
                    Email,
                    Password,
                    Mobile,
                    UserName
                })
                newuser.save()
                console.log("new user added");
                return res.json({err:"noError"})
            }
        })
    }
    (Name && UserName && Email && Password && Mobile)?(validate()):(errInsufficientInfo())
})

module.exports = Router 