import React, {useState, useEffect} from 'react';
import './Grid.css';

function Grid() {
const [bowlPosition, setBowlPosition] = useState(1);

useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && bowlPosition > 0) {
        setBowlPosition(bowlPosition - 1);
      } else if (e.key === 'ArrowRight' && bowlPosition < 2) {
        setBowlPosition(bowlPosition + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [bowlPosition]);

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
