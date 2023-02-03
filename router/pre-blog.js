const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router();

const PreBlog = mongoose.model("PreBlog");

Router.post("/upload/preblog", (req, res) => {
  let {
    CreatorName,
    CreatorKey,
    ContentTag,
    ImageUrl,
    BlogTitle,
    BlogSummary,
    BloagDesciption,
  } = req.body;
  const newBlog = new PreBlog({
    CreatorName,
    CreatorKey,
    ContentTag,
    ImageUrl,
    BlogTitle,
    BlogSummary,
    BloagDesciption,
  })
  newBlog.save() ;
  res.status(200).json(newBlog)
});
Router.get("/upload/fetchpreblog",(req,res)=>{
    PreBlog.find().then((allData)=>{
        return res.json(allData)
    })
})
Router.put("/update/preblog",(req,res)=>{
  let id =req.body.id;
  let status = req.body.status;
  PreBlog.findById(id, function (err, docs) {
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
