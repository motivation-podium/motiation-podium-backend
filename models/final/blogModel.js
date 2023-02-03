const mongoose = require("mongoose")
const BlogSchema = new mongoose.Schema({
    CreatorName : String ,
    CreatorKey : String ,
    ContentTag : String ,
    ImageUrl : String ,
    BlogTitle : String ,
    BlogSummary : String ,
    BloagDesciption : String ,
    Status:Boolean
})
mongoose.model("BlogModel",BlogSchema);