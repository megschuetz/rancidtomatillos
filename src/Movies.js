import React from 'react'
import './Movies.css'
import Preview from './Preview'

function Movies({movies, handleMovieClick, error}) {

  const moviePreviews = movies.map(movie => {
    return (
      <Preview
        id={movie.id}
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.average_rating}
        date={movie.release_date}
        handleMovieClick={handleMovieClick}
      />
    )
  })


  return (
    <div> 
      {error ? <h2 className='error'>There's been an error. Deal.</h2> :
        <div className='movies-container'>
          {moviePreviews}
        </div>
      }
    </div> 
  )
}

export default Movies;
