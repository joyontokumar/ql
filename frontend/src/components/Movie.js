import React from 'react'

const Movie = ({ movies }) => {
  return (
    <div className="card">
      <div className="container">
        <img src="https://picsum.photos/500" alt="movie image" />
        <h2>{movies.name}</h2>
        <h4>
          {movies.genre} - {movies.year}
        </h4>
      </div>
    </div>
  )
}

export default Movie
