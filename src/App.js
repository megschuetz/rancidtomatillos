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


  render() {
    return (
      <body>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        {this.state.singleMoviePreview && <MovieDetails />}
        <main>
          <Movies movies={this.state.movies} handleMovieClick={this.handleMovieClick}/>
        </main>
      </body>
    );
  }
}

export default App;
