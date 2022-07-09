import React from 'react'
import './Preview.css'

function Preview({ title, poster, rating, date }) {
  return (
    <div>
      <div className='poster'>
        <p className='rating'>{(Math.round(rating * 100)/100).toFixed(2)}</p>
        <img src={poster}></img>
      </div>
      <h3>{title}</h3>
      <p className='date'>Date Released {date}</p>
    </div>
  )
}

export default Preview