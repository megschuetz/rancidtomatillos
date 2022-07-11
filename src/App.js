import React, {Component} from 'react'
import './App.css'
import Movies from './Movies'
import MovieDetails from './MovieDetails'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMoviePreview: false,
      id: 0, 
      error: false
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => this.checkForError(response))
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => this.setState({error: true}))
  }

  checkForError = (response) => {
    if (!response.ok) {
      throw new Error('Error')
    } else {
      return response.json()
    }
  }

  handleMovieClick = (id) => {
    this.setState({singleMoviePreview: true, id: id})
  }

  handleClose = () => {
    this.setState({singleMoviePreview: false, id: 0})
  }

  // {this.state.error && <h2>There's been an error. Deal.</h2>}
  render() {
    return (
      <body>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        {this.state.singleMoviePreview ? 
          <MovieDetails handleClose={this.handleClose} id={this.state.id} checkForError={this.checkForError} /> 
        : 
          <main>
            <Movies movies={this.state.movies} handleMovieClick={this.handleMovieClick} error={this.state.error}/>
          </main>
        }
      </body>
    );
  }
}

export default App;
