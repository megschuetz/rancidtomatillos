import React from 'react'
import './MovieDetails.css'

function MovieDetails() {
  const backgroundImage = {
    backgroundImage: 'url(https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg)'
  }
  return (
    <main className='movie-details' style={backgroundImage}>
      <div className='movie-box'>hi</div>
    </main>
  )
}

export default MovieDetails;
