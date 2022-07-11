import React from 'react'
import './Preview.css'

function Preview({ id, title, poster, rating, date, handleMovieClick }) {
  return (
    <div className='preview' onClick={() => handleMovieClick(id)}>
      <div className='poster'>
        <p className='rating'>{(Math.round(rating * 100)/100).toFixed(2)}</p>
        <img src={poster}></img>
      </div>
      <div className='short-description'>
        <h3>{title}</h3>
        <p className='date'>Date Released {date}</p>
      </div>
    </div>
  )
}

export default Preview
