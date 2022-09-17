import React from 'react';
import root from './index';
import {App} from './App';
import "./App.css";

function About() {
  return (
    <div className="About">
        <span>By: <a href='https://www.instagram.com/george_psf/'>George P.</a></span> <br />
        <span>Design By: <a href='https://www.instagram.com/will.argate11/'>Will R.</a></span>
        <div className='quotes'>
            <br />
            <div className='yada'>Querida Yada... Quão profundo é o seu amor? ♡</div> <br /> <br />
            <div className='luan'>Luan, feliz aniversário amigo, eu vou sempre lembrar desse dia. :{')'}</div>
        </div>
        <div><button className='ttt-btn ttt-btn_bottom-left' onClick={() => {
            root.render(<React.StrictMode><App /></React.StrictMode>);
        }}>x</button></div>
    </div>
  );
}

export default About;
