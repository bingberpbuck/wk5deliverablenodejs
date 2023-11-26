import React from 'react';

function DiceList({ rolls }) {
  return (
    <div>
      <h2>Previous Rolls:</h2>
      <ul>
        {rolls.map((roll, index) => (
          <li key={index}>{roll} </li>
        ))}
      </ul>
    </div>
  );
}

export default DiceList;