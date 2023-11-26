import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import DiceRoll from './DiceRoll';
import DiceList from './DiceList';
import axios from 'axios';

function App() {
  const [diceRolls, setDiceRolls] = useState([]);

  function rollDice() {
    axios.get('http://localhost:3001/api/random-number')
      .then(response => {
        const newRoll = response.data.randomNumber;
        //Updating the diceRolls array by putting the new dice roll as the first entry in the array and pushing the rest of the rolls
        //back by one index I think
        setDiceRolls([newRoll, ...diceRolls]);
      })
      .catch(error => {
        console.error('Error fetching random number:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={rollDice}>Roll Dice</button>
        <DiceRoll roll={diceRolls[0]} /> 
        <DiceList rolls={diceRolls} />
      </header>
    </div>
  );
}

export default App;
