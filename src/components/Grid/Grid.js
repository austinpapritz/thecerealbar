import React, {useState} from 'react';
import './Grid.css';

function Grid() {
const [bowlPosition, setBowlPosition] = useState(1);
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
      <div className={bowlPosition === 0 ? 'cell active' : 'cell'}></div>
      <div className={bowlPosition === 1 ? 'cell active' : 'cell'}></div>
      <div className={bowlPosition === 2 ? 'cell active' : 'cell'}></div>
    </div>
  );
}

export default Grid;
