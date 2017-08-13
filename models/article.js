let mongoose = require('mongoose')

let articleSchema = mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  url:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: false,
  },

})


let Article = module.exports = mongoose.model('Article', articleSchema)
