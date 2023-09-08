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
      <div className="cell blue"></div>
      <div className="cell red"></div>
      <div className="cell green"></div>

      {/* MIDDLE ROW (arrow indicator) */}
      <div className={bowlPosition === 0 ? 'cell indicator' : 'cell'}></div>
      <div className={bowlPosition === 1 ? 'cell indicator' : 'cell'}></div>
      <div className={bowlPosition === 2 ? 'cell indicator' : 'cell'}></div>

      {/* BOTTOM ROW (user bowl) */}
      <div className={bowlPosition === 0 ? 'cell active' : 'cell'}></div>
      <div className={bowlPosition === 1 ? 'cell active' : 'cell'}></div>
      <div className={bowlPosition === 2 ? 'cell active' : 'cell'}></div>
    </div>
  );
}

export default Grid;
