import React, { useState, useEffect } from 'react';
import root from './index';
import {App, isCom} from './App';
import './style/App.css';
import './style/Game.css';

interface IGameRules {
    table: Array<number>,
    turn: number
}

function Game() {

    const player = React.useRef(null);
    const scoreRef = React.useRef(null);
    const tableRef = React.useRef(null);
    const resultRef = React.useRef(null);
    const winnerRef = React.useRef(null);

    const [ended, setEnded] = useState(false);
    const [score, setScore] = useState(Array<number>(2).fill(0));
    const [gameRules, setGameRules] = useState<IGameRules>({ table: Array(9).fill(-1), turn: 0 });

    const UpdateTable = (eventButton: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let button: HTMLInputElement = (eventButton.target as HTMLInputElement);
        console.log(isCom);
        if (button.classList.contains("table-item-button_already")) return;
        setGameRules({ table: gameRules.table.map((x, i) => i === Number(button.value) ? gameRules.turn : x), turn: gameRules.turn === 0 ? 1 : 0 });
        button.classList.add("table-item-button_already");
        if(!ended){
            if (gameRules.turn === 0) button.classList.add("table-item_cross");
            else button.classList.add("table-item_circle");
        }
        else button.classList.add("table-item_invalid");
    }

    const CheckWinner = () => {
        let cases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < cases.length; i++) {
            if (gameRules.table[cases[i][0]] === gameRules.table[cases[i][1]] &&
                gameRules.table[cases[i][0]] === gameRules.table[cases[i][2]] &&
                gameRules.table[cases[i][0]] !== -1) {
                return 1;
            }
        }
        if (gameRules.table.every(x => x !== -1)) return 2;
        console.log(gameRules.table);
        return 0;
    }

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const BotTurn =async () => {
        let buttons = Array.from(document.getElementsByClassName("table-item-button")).filter((x) => x.innerHTML === '') as Array<HTMLButtonElement>;
        buttons.forEach((e) => {
            e.style.pointerEvents = "none";
        });
        await timeout(1000);
        let random = Math.floor(Math.random() * buttons.length);
        buttons[random].click();
        buttons.forEach((e) => {
            e.style.pointerEvents = "all";
        })
    }

    useEffect(() => {
        if(ended) return;
        let p = player.current as unknown as HTMLElement;
        p.className = '';
        if(gameRules.turn === 0) {
            p.innerHTML = "X";
            p.classList.add("score-current_cross");
        }
        else {
            if(isCom) BotTurn();
            p.innerHTML = "O";
            p.classList.add("score-current_circle");
        }
        let checkWinner = CheckWinner();
        if(checkWinner !== 0){
            setEnded(true);            
            let t = tableRef.current as unknown as HTMLElement;
            t.classList.add("table_win");
            let r = resultRef.current as unknown as HTMLElement;
            r.classList.add("result_end");
            let w = winnerRef.current as unknown as HTMLElement;
            if (checkWinner === 2)
            {
                w.innerHTML = "Draw";
                w.style.textShadow = "0 0 75px #ffbb00, 0 0 10px #fbff00";
            }
            else {
                let winner = gameRules.turn === 0 ? 1 : 0;
                setScore(score.map((x, i) => i === winner ? x + 1 : x));
                w.innerHTML = "Winner " + (winner === 0 ? "Red" : "Green");
                w.style.textShadow = winner === 0 ? "0 0 75px #ff0000, 0 0 10px #ff6600" : "0 0 75px #00ff00, 0 0 10px #00ff88";
            }
        }
    }, [gameRules]);

    useEffect(() => {
        let s = scoreRef.current as unknown as HTMLElement;
        s.innerHTML = score[0] + " - " + score[1];
    }, [score]);

    return (
        <div className='Game'>
            <span ref={player}>X</span>
            <br/>
            <div className="score">
                <div className="table-item_cross">Player X</div>
                <div ref={scoreRef}>0 - 0</div>
                <div className="table-item_circle">Player O</div>
            </div>
            <br/>
            <div ref={tableRef} id="table">
                {gameRules.table.map((x, i) =>
                    <div className="table-item" key={i}>
                        <button className="table-item-button" value={i} onClick={(e) => { UpdateTable(e) }}>{x === -1 ? '' : x === 0 ? 'X' : 'O'}</button>
                    </div>
                )}
            </div>
            <div ref={resultRef} id="result">
                <div ref={winnerRef} className="result-winner">Winner</div>
                <div className="result-selectable" onClick={() => {
                    setEnded(false);
                    setGameRules({ table: Array(9).fill(-1), turn: gameRules.turn === 0 ? 0 : 1 });
                    document.getElementById("table")!.className = '';
                    document.getElementById("result")!.className = '';
                    Array.from(document.getElementsByClassName("table-item-button")).forEach((button, i) => {
                        button.className = '';
                        button.classList.add("table-item-button");
                    });
                }}><button>Restart</button></div>
                <div className="result-selectable" onClick={() => {
                    root.render(<React.StrictMode><App /></React.StrictMode>);
                }}><button>Home</button></div>
            </div>
        </div>
    );
}

export default Game;