import React from 'react';
import root from './index';
import Game from './Game';
import './App.css';

class Tittle extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="Tittle">
        <h1 >TIC TAC TOE</h1>
      </div>
    );
  }
}

class TittleUI extends React.Component {
  render(): React.ReactNode {
    const InitGame = () => { };

    return (
      <div className='TittleUI' id='test'>
        <div className="gameMode">
          <button className="ttt-btn">{'<'}</button>
          <span id="game-mode">PVP</span>
          <button className="ttt-btn">{'>'}</button>
        </div>
        <div className="play">
          <button className="ttt-btn" onClick={() =>{
            root.render(<React.StrictMode><Game/></React.StrictMode>);
          }}>Play</button>
        </div>
        <div className='language'>
          <input type="radio" id="enus" name="language" value="en" checked />
          <label className="ttt-radio" htmlFor="enus">
            EN • US
          </label>
          <input type="radio" id="ptbr" name="language" value="pt" />
          <label className="ttt-radio" htmlFor="ptbr">
            PT • BR
          </label>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Tittle />
        <TittleUI />
      </div>
    );
  }
}

export default App;
