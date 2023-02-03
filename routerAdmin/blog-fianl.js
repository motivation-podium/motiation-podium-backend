const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router();
const BlogModel = mongoose.model("BlogModel");
Router.post("/upload/final/blog", (req, res) => {
  let {
    CreatorName,
    CreatorKey,
    ContentTag,
    ImageUrl,
    BlogTitle,
    BlogSummary,
    BloagDesciption,
  } = req.body;
  const newBlog = new BlogModel({
    CreatorName,
    CreatorKey,
    ContentTag,
    ImageUrl,
    BlogTitle,
    BlogSummary,
    BloagDesciption,
  });
  newBlog.save();
  res.status(200).json(newBlog);
});
Router.get("/final/blog", (req, res) => {
  BlogModel.find().then((allData) => {
    return res.json(allData);
  });
});
module.exports = Router;
