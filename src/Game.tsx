import React from 'react';
import './App.css';
import './Game.css';


class Game extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='Game'>
                <div className="score">
                    <div>Player 1</div>
                    <div>0 - 0</div>
                    <div id="p2">Player 2</div>
                </div>
                <div id="table" className="center-abs">
                    <div id="tictable" className="grid-container"></div>
                </div>
                <div id="win-details" className="opacity">
                    <div id="winner">Winner</div>
                    <div className="btn"><button>Restart</button></div>
                    <div className="btn"><button>Home</button></div>
                </div>
            </div>
        );
    }
}

export default Game;