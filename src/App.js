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
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movi')
      .then(response => this.checkForError(response))
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => this.displayNewError(error))
  }

  checkForError = (response) => {
    if (!response.ok) {
      throw new Error('Error')
    } else {
      return response.json()
    }
  }

  displayNewError = (error) => {
    this.setState({error: true})
    console.log(error)
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
          <MovieDetails handleClose={this.handleClose} id={this.state.id}/> 
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
