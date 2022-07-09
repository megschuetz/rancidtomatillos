import React, {Component} from 'react'
import './App.css';
import {movieData} from './movieData'
import Movies from './Movies'
import MovieDetails from './MovieDetails'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      singleMoviePreview: false
    }
  }

  handleMovieClick = () => {
    // console.log('hey im a movie click', this.state.singleMoviePreview)
    this.setState({singleMoviePreview: true})
    // console.log(this.state, 'after')
  }

  // handleClose() {
  //
  // }
  // <main>
  //   <Movies movies={this.state.movies} handleMovieClick={this.handleMovieClick}/>
  // </main>

  render() {
    return (
      <body>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <MovieDetails />
      </body>
    );
  }
}

export default App;
