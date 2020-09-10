const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: String,
})
const MovieSchema = mongoose.model('Movie', movieSchema)
module.exports = MovieSchema
