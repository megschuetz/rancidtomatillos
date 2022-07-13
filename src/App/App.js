import React, {Component} from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Route } from 'react-router-dom';
import fetchResponse from '../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      id: 0, 
      error: false
    }
  };

  componentDidMount = () => {
    fetchResponse('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => this.setState({error: true}))
  };

  handleMovieClick = (id) => {
    this.setState({ id: id})
  };

  handleClose = () => {
    this.setState({ id: 0})
  };


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
            <MovieDetails handleClose={this.handleClose} id={this.state.id} />
          }/>
      </body>
    );
  };
};

export default App;
