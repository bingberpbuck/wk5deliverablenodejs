import React from 'react';

function DiceRoll({ roll }) {
  return (
    <div>
      <h2>Your Dice Roll Is........:</h2>
      <p>{roll}</p>
    </div>
  );
}

export default DiceRoll;