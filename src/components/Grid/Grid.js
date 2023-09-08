import React from 'react';
import './Grid.css';

function Grid() {
  return (
    <div className="grid">
      {/* TOP ROW (cereal boxes) */}
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>

      {/* MIDDLE ROW (arrow indicator) */}
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>

      {/* BOTTOM ROW (user bowl) */}
      <div className="cell"></div>
      <div className="cell active"></div>
      <div className="cell"></div>
    </div>
  );
}

export default Grid;
