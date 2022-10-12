import React from 'react';
import root from './index';
import {App} from './App';
import "./style/App.css";

function About() {
  return (
    <div className="About">
        <span>By: <a href='https://www.instagram.com/george_psf/'>George P.</a></span> <br />
        <span>Design by: <a href='https://www.instagram.com/will.argate11/'>Will R.</a></span> <br />
        <span>GitHub: <a href='https://github.com/GeorgePaulino/TicTacToe'>Tic Tac Toe</a></span>
        <div className='quotes'>
            <br />
            <div className='yada'>Dear Yada... How deep is your love? ♡</div> <br /> <br />
            <div className='luan'>Luan happy birthday mate. - 09 / 17</div>
        </div>
        <div><button className='ttt-btn ttt-btn_bottom-left' onClick={() => {
            root.render(<React.StrictMode><App /></React.StrictMode>);
        }}>x</button></div>
    </div>
  );
}

export default About;
