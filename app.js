const express = require("express")
const app = express()

var port = process.env.PORT || 8080;

app.get("/", (request, response) => {
  response.send("Hello")
})

app.listen(port, () => {
  console.log("Server listening on port: " + port)
})
