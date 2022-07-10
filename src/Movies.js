import React from 'react'
import './Movies.css'
import Preview from './Preview'

function Movies({movies, handleMovieClick}) {

  const moviePreviews = movies.map(movie => {
    return (
      <Preview
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.average_rating}
        date={movie.release_date}
        handleMovieClick={handleMovieClick}
      />
    )
  })


  return (
    <div className='movies-container'>
      {moviePreviews}
    </div>
  )
}

export default Movies;
