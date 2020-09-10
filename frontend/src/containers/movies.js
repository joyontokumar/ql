import React, { Component } from 'react'
import Movie from '../components/Movie'
import { gql } from '@apollo/client'
import { graphql } from 'react-apollo'

const allmovies = gql`
  {
    movies {
      name
      genre
      year
    }
  }
`

class Movies extends Component {
  state = {
    movies: [
      { name: 'john doe', genre: 'Action', year: 2020 },
      { name: 'jannathan doe', genre: 'Action', year: 2019 },
      { name: 'jannathan doe', genre: 'Action', year: 2019 },
      { name: 'bangladeshi people', genre: 'Action', year: 2019 },
      { name: 'jannathan doe', genre: 'Action', year: 2019 },
      { name: 'williamson munro', genre: 'Action', year: 2008 },
    ],
  }
  render() {
    console.log(this.props)
    const getMoives = this.state.movies
    return (
      <div className="movies">
        {getMoives.map((single, index) => {
          return <Movie key={index} movies={single} />
        })}
      </div>
    )
  }
}
export default graphql(allmovies)(Movies)
