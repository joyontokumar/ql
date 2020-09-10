const Movie = require('../models/model')
// const movies = [
//   { name: 'john doe', genre: 'Action', year: 2020 },
//   { name: 'jannathan doe', genre: 'Action', year: 2019 },
//   { name: 'jannathan doe', genre: 'Action', year: 2019 },
//   { name: 'bangladeshi people', genre: 'Action', year: 2019 },
//   { name: 'jannathan doe', genre: 'Action', year: 2019 },
//   { name: 'williamson munro', genre: 'Action', year: 2008 },
// ]
const resolvers = {
  movies: () => {
    return Movie.find({})
  },
  movieByName: (args) => {
    return Movie.findOne({ name: args.name })
  },
  addMovie: (agrs) => {
    let movie = new Movie({
      name: agrs.name,
      genre: agrs.genre,
      year: agrs.year,
    })
    movie.save()
    return movie
  },
}

module.exports = resolvers
