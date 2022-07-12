import React, {Component} from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Route } from 'react-router-dom'

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


  render() {
    return (
      <body>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
          <Route exact path='/' render={() => 
            <main>
              <Movies movies={this.state.movies} handleMovieClick={this.handleMovieClick} error={this.state.error} />
            </main>
          }/>
          <Route path='/movies/:movie_id' render={() => 
            <MovieDetails handleClose={this.handleClose} id={this.state.id} checkForError={this.checkForError} />
          }/>
      </body>
    );
  }
}

export default App;
