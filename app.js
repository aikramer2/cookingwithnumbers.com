const express = require("express")
const path    = require("path")
const hljs    = require('highlight.js');
const mongoose = require('mongoose')

var mongo_uri = process.env.MONGODB_URI || 'mongodb://localhost/personal'

mongoose.connect(mongo_uri)
let db = mongoose.connection

//check connection
db.once('open', () => {console.log("Connected to mongodb")})

// Check for db errors
db.on('error', (err) => {console.log(err)})

// Init App
const app = express()

// Bring in Models
let Article = require('./models/article')

// Headers
function TemplateData(){
   this.title = "Cookingwithnumbers";
 }

// Load View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Static Path
app.use(express.static(path.join(__dirname, 'public')))

// Server Config
var port = process.env.PORT || 8080;

// Home Route
app.get("/", (request, response) => {
  var header = new TemplateData()
  response.render("index", header)
})

// Home Route
app.get("/papers-i-like", (request, response) => {
  Article.find({}, (err, articles) => {
    if(err){
      console.log(err)
    } else {

      var data = new TemplateData()
      data.articles = articles
      response.render("papers-i-like", data)
    }
  })
})

// Start Server
app.listen(port, () => {
  console.log("Server listening on port: " + port)
})
