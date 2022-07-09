import React from 'react'
import './MovieDetails.css'
import {movieDeets} from './movieData'

function MovieDetails() {

  console.log(movieDeets)
  const backgroundImage = {
    backgroundImage: 'url(https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg)'
  }
  return (
    <main className='movie-details' style={backgroundImage}>
      <div className='movie-box'>
        <section className='video-box'>Video Box</section>
        <section className='details-box'>
          <h2>Title: {movieDeets.movie.title}</h2>
          <p className='overview'>Overview: {movieDeets.movie.overview}</p>
          <div className='detail-columns'>
            <div className='column'>
              <p>Genre: {movieDeets.movie.genre}</p>
              <p>Budget: {movieDeets.movie.budget}</p>
              <p>Revenue: {movieDeets.movie.revenue}</p>
            </div>
            <div className='column'>
              <p>Runtime: {movieDeets.movie.runtime}</p>
              <p>Tagline: {movieDeets.movie.tagline}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MovieDetails;
