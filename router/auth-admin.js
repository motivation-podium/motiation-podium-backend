const express = require("express")
const Router = express.Router()

Router.post("/admin/auth" , (req,res)=>{
    let {Username , Password} = req.body
    if(Username === "pankajkumarkumbha" && Password === "motivation9872023"){
        return res.status(200).json({
            msg:"Approved"
        })
    }else{
        return res.status(200).json({
            msg:"Declined"
        })
    }

})
module.exports = Router  