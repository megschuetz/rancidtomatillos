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
      id: 0
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => console.log(error))
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
        {this.state.singleMoviePreview && <MovieDetails handleClose={this.handleClose} id={this.state.id}/>}
        <main>
          <Movies movies={this.state.movies} handleMovieClick={this.handleMovieClick}/>
        </main>
      </body>
    );
  }
}

export default App;
