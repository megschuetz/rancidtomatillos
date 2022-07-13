import React from 'react';
import './Movies.css';
import Preview from '../Preview/Preview';

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
    );
  });


  return (
    <div> 
      {error ? <h2 className='error'>Oops! There's been an error. Try again later.</h2> :
        <div className='movies-container'>
          {moviePreviews}
        </div>
      }
    </div> 
  );
};

export default Movies;
