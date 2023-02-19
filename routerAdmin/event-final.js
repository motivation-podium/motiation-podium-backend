const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router();
const EventModel = mongoose.model("EventModel");
Router.post("/upload/final/event", (req, res) => {
  let {
    EventKey,
    ImageUrl,
    EventTitle,
    EventSummary,
  } = req.body;
  const newEvent = new EventModel({
    EventKey,
    ImageUrl,
    EventTitle,
    EventSummary,
  });
  newEvent.save();
  res.status(200).json(newEvent);
});
Router.get("/final/event", (req, res) => {
  EventModel.find().then((allData) => {
    return res.json(allData);
  });
});
module.exports = Router;