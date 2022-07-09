import React, {Component} from 'react'
import './App.css';
import dummyData from './movieData'
import Movies from './Movies'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: dummyData.movies
    }
  }

  render() {
    return (
      <body>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <main>
          <Movies movies={this.state.movies}/>
        </main>
      </body>
    );
  }
}

export default App;
