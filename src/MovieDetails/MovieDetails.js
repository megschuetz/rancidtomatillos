import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'
import React, {Component} from 'react'
import './MovieDetails.css'
import { Link } from 'react-router-dom'

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
       singleMovieDetails: {},
       singleMovieVideo: {},
       error: false
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(response => this.props.checkForError(response))
      .then(data => this.setState({ singleMovieDetails: data.movie }))
      .catch(error => this.setState({error: true}))

    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`)
      .then(response => this.props.checkForError(response))
      .then(data => this.setState({ singleMovieVideo: data.videos[0]}))
      .catch(error => this.setState({error: true}))
  }

  render() {

    const { singleMovieDetails } = this.state

    const backgroundImage = {
      backgroundImage: `url(${singleMovieDetails.backdrop_path})`,
      backgroundSize: 'cover'
    }

    return (
      <div> 
      { this.state.error ? <h2 className='error'>Oops! There's been an error. Try again later.</h2> :
          <main className='movie-details' style={backgroundImage}>
            <Link to='/' className='close-button'> 
              <button onClick={() => this.props.handleClose()}>X</button>
            </Link>
            <iframe
            width="800"
            height="100%"
            src={`https://www.youtube.com/embed/${this.state.singleMovieVideo.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            /> 
            <div className='movie-box'>
              <section className='details-box'>
              <div className='body-details'>
                <h2 className='title'>{singleMovieDetails.title}</h2>
                <p className='tag-line'>{singleMovieDetails.tagline}</p>
                <p>Genre: {singleMovieDetails.genres}</p>
                <p className='overview'>Overview: {singleMovieDetails.overview}</p>
              </div>
              <div className='column'>
                  <p>Runtime: {singleMovieDetails.runtime} minutes</p>
                  <p>Budget: {singleMovieDetails.budget}</p>
                  <p>Revenue: {singleMovieDetails.revenue}</p>
              </div>
              </section>
            </div>
          </main>
        }
        </div>
    )
  }
}

export default MovieDetails;