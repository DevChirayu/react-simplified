import React, { useState } from "react";
import "./MinesGame.css";

const MinesGame = () => {
  // Initialize grid with bombs and diamonds
  const generateGrid = () => {
    const grid = Array(5)
      .fill()
      .map(() => Array(5).fill("hidden"));
    
    // Randomly assign bombs
    for (let i = 0; i < 10; i++) { // 10 bombs
      let row, col;
      do {
        row = Math.floor(Math.random() * 5);
        col = Math.floor(Math.random() * 5);
      } while (grid[row][col] !== "hidden");
      grid[row][col] = "bomb";
    }
    
    // Assign diamonds to remaining cells
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (grid[row][col] === "hidden") {
          grid[row][col] = "gem";
        }
      }
    }

    return grid;
  };

  const [grid, setGrid] = useState(generateGrid);
  const [revealed, setRevealed] = useState(
    Array(5)
      .fill()
      .map(() => Array(5).fill(false))
  );

  const handleClick = (row, col) => {
    const newRevealed = [...revealed];
    newRevealed[row][col] = true;
    setRevealed(newRevealed);
  };

  return (
    <div className="mines-game">
      <div className="side-panel">
        <div className="mode-toggle">
          <button>Manual</button>
          <button>Auto</button>
        </div>
        <div className="bet-controls">
          <div>
            <label>Bet Amount</label>
            <input type="number" step="0.00000001" placeholder="0.00000000" />
          </div>
          <div className="bet-buttons">
            <button>1/2</button>
            <button>2x</button>
          </div>
          <div>
            <label>Mines</label>
            <select>
              {[...Array(24).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="bet-button">Bet</button>
      </div>

      <div className="game-grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`grid-cell ${revealed[rowIndex][colIndex] ? cell : "hidden"}`}
                onClick={() => handleClick(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinesGame;
