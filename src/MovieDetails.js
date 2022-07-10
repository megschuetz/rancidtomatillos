import React, {Component} from 'react'
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
       singleMovieDetails: {},
       singleMovieVideo: {}
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({ singleMovieDetails: data.movie }))
      .catch(error => alert(`Error: ${error}`))
  }

  render() {

    const backgroundImage = {
      backgroundImage: `url(${this.state.singleMovieDetails.backdrop_path})`,
      backgroundSize: 'cover'
    }

    return (
      <main className='movie-details' style={backgroundImage}>
        <button className='close-button' onClick={() => this.props.handleClose()}>X</button>
        <div className='movie-box'>
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

//VIDEO START

// {/* <video width="320" height="240" className='video-box' controls>
// <source src={`https://www.youtube.com/embed/${this.state.singleMovieVideo.key}`}></source>
// </video> */}


// {/* <iframe
// width="853"
// height="480"
// src={`https://www.youtube.com/embed/${this.state.singleMovieVideo.key}`}
// frameBorder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// allowFullScreen
// title="Embedded youtube"
// /> */}

// fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`)
// .then(response => response.json())
// .then(data => this.setState({ singleMovieVideo: data.videos }))