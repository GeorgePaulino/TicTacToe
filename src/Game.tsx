import React, { useState, useEffect, Dispatch } from 'react';
import './App.css';
import './Game.css';

interface IGameRules {
    table: Array<number>,
    turn: number
}

function Game() {
    const [gameRules, setGameRules] = useState<IGameRules>({table: Array(9).fill(-1), turn: 0});
    
    const UpdateTable = (eventButton: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        stateSetter: Dispatch<IGameRules> = setGameRules) => {
        
        let button: HTMLInputElement = (eventButton.target as HTMLInputElement);
        if (button.value == '-') return;
        stateSetter({ table: gameRules.table.map((x, i) => i == Number(button.value) ? gameRules.turn : x), turn: gameRules.turn == 0 ? 1 : 0 })
        button.value = '-';
        if(gameRules.turn == 0) button.classList.add("table-item_cross");
        else button.classList.add("table-item_circle");
        console.log(CheckWinner());
    }

    const CheckWinner = () => {
        let cases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < cases.length; i++) {
            let x = 0;
            console.log("I");
            if(gameRules.table[cases[i][0]] === gameRules.table[cases[i][1]] && gameRules.table[cases[i][0]] === gameRules.table[cases[i][2]]) {
                return true;
            }
        }
        return false;
    }

    return (
        <div className='Game'>
            <div className="score">
                <div>Player 1</div>
                <div>0 - 0</div>
                <div>Player 2</div>
            </div>
            <div id="table">
                {gameRules.table.map((x, i) =>
                    <div className="table-item" key={i}>
                        <button value={i} onClick={(e) => { UpdateTable(e) }}>{x == -1 ? '' : x == 0 ? 'X' : 'O'}</button>
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

export default Game;