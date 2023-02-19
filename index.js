const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose") ;
const dotenv = require("dotenv")


const PORT = process.env.PUBLIC_PORT || 4000;
const MongoPass = process.env.MONGODBPASS || "karanarora"
const app = express();
app.use(cors())

// MODEL USER
require('./models/user')
// MODEL BLOG
require('./models/preBlog')
require("./models/final/blogModel")
// MODEL EVENT
require('./models/preEvent')
require("./models/final/eventModel")


dotenv.config()
app.use(express.json())
// Routes AUTHURIZATION
app.use(require("./router/auth-signup"))
app.use(require("./router/auth-signin"))
app.use(require("./router/auth-admin"))
// Routes BLOGS
app.use(require("./router/pre-blog"))
app.use(require("./routerAdmin/blog-fianl"))
// Routes EVENTS
app.use(require("./router/pre-event"))
app.use(require("./routerAdmin/event-final"))

// const PORT = process.env.PUBLIC_PORT || 4000;

app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`);});


const mongooseConnetedMsg = "Successfully connected to MongoDb Database"
const mongooseConnetionError = "Unable to connect with mongoDb Database"
const uri = `mongodb+srv://karanarora:${MongoPass}@cluster0.olb3y6w.mongodb.net/?retryWrites=true&w=majority`;
const mongoObj = { useNewUrlParser: true, useUnifiedTopology: true }
function mongooseFunction(err){
    (err)?console.log(err):console.log(mongooseConnetedMsg);
}
mongoose.set('strictQuery', true);
mongoose.connect(uri,mongoObj,(err)=>{mongooseFunction(err)})
app.get('/', (req, res) => {
    res.send("GET Request Called")
  }) 