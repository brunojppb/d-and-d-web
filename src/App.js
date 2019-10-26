import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import PlayersContainer from './components/PlayersContainer';
import {EnemiesContainer} from './components/EnemiesContainer';

const App =  () => {
  return (
    <Router>
      <div className="App">
        <div className="github-ribbon">
          <a href="https://github.com/brunojppb/d-and-d-web">Fork me on Github</a>
        </div>
        <div className="clip-to-bounds-container">
          <PlayersContainer/>
        </div>
        <div className="clip-to-bounds-container">
          <EnemiesContainer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
