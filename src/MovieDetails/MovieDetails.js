import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'
import React, {Component} from 'react'
import './MovieDetails.css'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

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
            <div className='pop-up-box'>
              <iframe
                width="700"
                height="100%"
                src={`https://www.youtube.com/embed/${this.state.singleMovieVideo.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              /> 
              <section className='details-box'>
                <div className='short-details'>
                  <h2 className='title'>{singleMovieDetails.title}</h2>
                  <p>{dayjs(singleMovieDetails.release_date).format('YYYY')}</p>
                  <p>{singleMovieDetails.runtime} minutes </p>
                </div>
                <p className='genre'>{singleMovieDetails.genres}</p>
                <p className='tag-line'>{singleMovieDetails.tagline}</p>
                <p className='overview'>{singleMovieDetails.overview}</p>
              </section>
            </div>
          </main>
        }
        </div>
    )
  }
}

export default MovieDetails;