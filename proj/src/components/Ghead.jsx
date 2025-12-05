import React from "react";
function Acord(props){
    return <>
        <div id="gameTitle">
        <h1>🎮Memory cards!🃏</h1>
        <div id="scr">
            <h4>Score: {props.score}</h4>
            <h4>Moves:  {props.moves}</h4>
        </div>
            <button id="newg">New Game</button>
        </div>
    </>
}
export default Acord;