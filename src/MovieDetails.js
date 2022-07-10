import React, {Component} from 'react'
import './MovieDetails.css'
import {movieDeets} from './movieData'

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
       singleMovieDetails: {}
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({ singleMovieDetails: data.movie }))
    console.log('componentdidmount  here')
  }

  render() {

    const backgroundImage = {
      backgroundImage: `url(${this.state.singleMovieDetails.backdrop_path})`
    }

    return (
      <main className='movie-details' style={backgroundImage}>
        <button className='close-button' onClick={() => this.props.handleClose()}>X</button>
        <div className='movie-box'>
          <section className='video-box'>Video Box</section>
          <section className='details-box'>
            <h2>Title: {this.state.singleMovieDetails.title}</h2>
            <p className='overview'>Overview: {this.state.singleMovieDetails.overview}</p>
            <div className='detail-columns'>
              <div className='column'>
                <p>Genre: {this.state.singleMovieDetails.genres}</p>
                <p>Budget: {this.state.singleMovieDetails.budget}</p>
                <p>Revenue: {this.state.singleMovieDetails.revenue}</p>
              </div>
              <div className='column'>
                <p>Runtime: {this.state.singleMovieDetails.runtime} minutes</p>
                <p>Tagline: {this.state.singleMovieDetails.tagline}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    )
  }
}

export default MovieDetails;
