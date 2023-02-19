const mongoose = require("mongoose")
const EventSchema = new mongoose.Schema({
    EventKey : String ,
    ImageUrl : String ,
    EventTitle : String ,
    EventSummary : String ,
    Status:Boolean
})
mongoose.model("EventModel",EventSchema);