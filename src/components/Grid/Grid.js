import React, {useState, useEffect} from 'react';
import UserBowl from './Bottom/UserBowl.js';
import CerealBox from './Top/CerealBox.js';
import './Grid.css';

function Grid() {
const [bowlPosition, setBowlPosition] = useState(1);
const [cerealBoxes, setCerealBoxes] = useState([
    { cereal: 'blue', amount: 100 },
    { cereal: 'red', amount: 100 },
    { cereal: 'green', amount: 100 },
    ]);
const [bowl, setBowl] = useState([
    { cereal: 'blue', amount: 0 },
    { cereal: 'red', amount: 0 },
    { cereal: 'green', amount: 0 },
    ]);


useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && bowlPosition > 0) {
        setBowlPosition(bowlPosition - 1);
      } else if (e.key === 'ArrowRight' && bowlPosition < 2) {
        setBowlPosition(bowlPosition + 1);
      } else if (e.key === 'ArrowDown') {
        transferCereal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [bowlPosition, cerealBoxes, bowl]);

  // On down arrow press
const transferCereal = () => {
    // Get the cereal box above the current bowl position
    const currentBox = cerealBoxes[bowlPosition];
  
    // Decide on a transfer rate
    const transferRate = 10;
  
    // Check if the bowl already has this type of cereal
    const existingCerealInBowl = bowl.find(c => c.color === currentBox.color);
  
    // Transfer cereal from box to bowl
    if (currentBox.amount >= transferRate) {
      // Update the cereal box amount
      setCerealBoxes(prevState => prevState.map((box, index) => {
        if (index === bowlPosition) {
          return { ...box, amount: box.amount - transferRate };
        }
        return box;
      }));
  
      // Update the bowl
      if (existingCerealInBowl) {
        // Add to the existing amount in the bowl
        setBowl(prevState => prevState.map(c => {
          if (c.color === currentBox.color) {
            return { ...c, amount: c.amount + transferRate };
          }
          return c;
        }));
      } else {
        // Add new cereal type to the bowl
        setBowl(prevState => [...prevState, { color: currentBox.color, amount: transferRate }]);
      }
    }
  };
  


  return (
    <div className="grid">
        {/* TOP ROW (cereal boxes) */}
        {cerealBoxes.map((box) => {
           return <CerealBox color={box.cereal} amount={box.amount} />
        })}

        {/* MIDDLE ROW (arrow indicator) */}
        <div className={bowlPosition === 0 ? 'cell indicator' : 'cell'}></div>
        <div className={bowlPosition === 1 ? 'cell indicator' : 'cell'}></div>
        <div className={bowlPosition === 2 ? 'cell indicator' : 'cell'}></div>

        {/* BOTTOM ROW (user bowl) */}
        <UserBowl bowl={bowl} />
    </div>
  );
}

export default Grid;
