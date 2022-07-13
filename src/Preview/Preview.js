import React from 'react'
import './Preview.css'
import { Link } from 'react-router-dom'
import Star from '../star.png'
import YouTube from '../youtube.png'
import Play from '../play-button.png'

function Preview({ id, title, poster, rating, date, handleMovieClick }) {
  return (
    <Link to={`/movies/${id}`} style={{textDecoration: 'none'}}>
      <div className='preview' onClick={() => handleMovieClick(id)}>
        <div className='poster'>
          <div className='rating-container'>
            <img className='star' src={Star} height='15'/>
            <p className='rating'>{(Math.round(rating * 100)/100).toFixed(2)}</p>
          </div>
          <img className='poster-cover' src={poster}></img>
        </div>
        <div className='short-description'>
          <h3>{title}</h3>
          <button className='more-button'>
            <img className='play' src={Play}/>
            <p className='more'>Preview</p>
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Preview
