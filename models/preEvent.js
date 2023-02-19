const mongoose = require("mongoose")
const preEventSchema = new mongoose.Schema({
    EventKey : String ,
    ImageUrl : String ,
    EventTitle : String ,
    EventSummary : String ,
    Status:Boolean
})
mongoose.model("PreEvent",preEventSchema);