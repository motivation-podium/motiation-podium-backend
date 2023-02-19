const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router();

const PreEvent = mongoose.model("PreEvent");

Router.post("/upload/preevent", (req, res) => {
  let {
    EventKey,
    ImageUrl,
    EventTitle,
    EventSummary,
  } = req.body;
  const newEvent = new PreEvent({
    EventKey,
    ImageUrl,
    EventTitle,
    EventSummary,
  })
  newEvent.save();
  res.status(200).json(newEvent)
});
Router.get("/fetch/fetchpreEvents",(req,res)=>{
  PreEvent.find().then((allData)=>{
        return res.json(allData)
    })
})
Router.put("/update/preevent",(req,res)=>{
  let id =req.body.id;
  let status = req.body.status;
  PreEvent.findById(id, function (err, docs) {
    if (err){
        console.log(err);
        res.json({success:"false"})
    }
    else{
        docs.Status = status;
        docs.save();
        res.json({success:"true"})
    }
  })
})
module.exports = Router;