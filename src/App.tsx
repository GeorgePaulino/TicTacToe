import React from 'react';
import root from './index';
import Game from './Game';
import About from './About';
import './style/App.css';

var isCom = false;

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
    return (
      <div className='TittleUI' id='test'>
        <div className="gameMode">
          <button className="ttt-btn" onClick={(e) => {
            let button = (e.target as HTMLInputElement);
            isCom = button.innerHTML === "PVP" ? true : false;
            if(isCom) button.innerHTML = "COM";
            else button.innerHTML = "PVP"
          }}>PVP</button>
        </div>
        <div className="play">
          <button className="ttt-btn" onClick={() => {
            root.render(<React.StrictMode><Game /></React.StrictMode>);
          }}>Play</button>
        </div>
        <div className='language'>
          <input type="radio" id="enus" name="language" value="en" checked onClick={() => {
            //changeLanguage(1)
          }} />
          <label className="ttt-radio" htmlFor="enus">
            EN • US
          </label>
          <input type="radio" id="ptbr" name="language" value="pt" />
          <label className="ttt-radio" htmlFor="ptbr">
            PT • BR
          </label>
          <button className="ttt-btn ttt-btn_i" onClick={() => {
            root.render(<React.StrictMode><About /></React.StrictMode>);
          }}>i</button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Tittle />
      <TittleUI />
    </div>
  );
}

export {App, isCom};
