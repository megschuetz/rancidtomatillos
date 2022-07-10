import React, {Component} from 'react'
import './App.css'
import Movies from './Movies'
import MovieDetails from './MovieDetails'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      singleMoviePreview: false
    }
  }

  componentDidMount = () => {
    console.log('here')
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => console.log(error))
  }

  handleMovieClick = () => {
    this.setState({singleMoviePreview: true})
  }

  handleClose = () => {
    this.setState({singleMoviePreview: false})
  }

  render() {
    return (
      <body>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        {this.state.singleMoviePreview && <MovieDetails handleClose={this.handleClose}/>}
        <main>
          <Movies movies={this.state.movies} handleMovieClick={this.handleMovieClick}/>
        </main>
      </body>
    );
  }
}

export default App;
