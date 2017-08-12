const express = require("express")
const path = require("path")

// Init App
const app = express()

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


// Start Server
app.listen(port, () => {
  console.log("Server listening on port: " + port)
})
