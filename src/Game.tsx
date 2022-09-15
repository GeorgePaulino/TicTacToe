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
                    <div>Player 2</div>
                </div>
                <div id="table">
                    {[...Array(9)].map((x, i) =>
                        <div className="table-item">
                            <button></button>
                        </div>
                    )}
                </div>
                <div id="result" className="opacity">
                    <div id="winner">Winner</div>
                    <div className="btn"><button>Restart</button></div>
                    <div className="btn"><button>Home</button></div>
                </div>
            </div>
        );
    }
}

export default Game;