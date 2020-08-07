import React from 'react';
import Game from "./components/game";
import './App.css';
import raccoonpic from "./assets/raccoon.png";
import squirrelpic from "./assets/squirrel.png";
import bunnypic from "./assets/bunny.png";
import houndpic from "./assets/hound.png"






function App() {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonpic
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrelpic
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunnypic
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndpic
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
