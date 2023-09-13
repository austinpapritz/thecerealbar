import React, { useState, useEffect } from 'react';
import UserBowl from './Bottom/UserBowl.js';
import CerealBox from './Top/CerealBox.js';
import './Grid.css';
import Tracker from './Top/Tracker.js';

function Grid() {
    const [bowlPosition, setBowlPosition] = useState(2);
    const [cerealBoxes, setCerealBoxes] = useState([
        { name: 'rgb(44, 127, 200)', amount: 100 },
        { name: 'rgb(200, 44, 44)', amount: 100 },
        { name: 'rgb(44, 200, 101)', amount: 100 },
    ]);
    const [bowl, setBowl] = useState([
        { name: 'rgb(44, 127, 200)', amount: 0 },
        { name: 'rgb(200, 44, 44)', amount: 0 },
        { name: 'rgb(44, 200, 101)', amount: 0 },
    ]);


    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft' && bowlPosition > 1) {
                setBowlPosition(bowlPosition - 1);
            } else if (e.key === 'ArrowRight' && bowlPosition < 3) {
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
        const currentBox = cerealBoxes[bowlPosition - 1];
        const currentBowlLevel = bowl.reduce((acc, c) => acc + c.amount, 0);

        const transferRate = 10;

        // Check if the bowl already has this type of cereal
        const existingCerealInBowl = bowl.find(c => c.name === currentBox.name);

        // If there is enough cereal in the box and the bowl isn't full, transfer cereal from box to bowl
        if (currentBox.amount >= transferRate && currentBowlLevel < 100) {
            // Update the cereal box amount
            setCerealBoxes(prevState => prevState.map((box, index) => {
                if (index === bowlPosition - 1) {
                    return { ...box, amount: box.amount - transferRate };
                }
                return box;
            }));

            // Update the bowl
            if (existingCerealInBowl) {
                // Add to the existing amount in the bowl, if there
                setBowl(prevState => prevState.map(c => {
                    if (c.name === currentBox.name) {
                        return { ...c, amount: c.amount + transferRate };
                    }
                    return c;
                }));
            } else {
                // Add new cereal type to the bowl if not already there
                setBowl(prevState => [...prevState, { color: currentBox.color, amount: transferRate }]);
            }
        }
    };

    return (
        <div className="grid">
            {/* TOP ROW (cereal boxes) */}
            <div>Use the arrow keys</div>
            {cerealBoxes.map((box, index) => {
                return <CerealBox className="cereal-cell" key={ index } color={ box.name } amount={ box.amount } />
            })}
            <Tracker bowl={ bowl }/>

            {/* MIDDLE ROW (down arrow indicator) */}
            <div className="indicator indicator-cell" style={{ gridColumnStart: bowlPosition + 1, gridRowStart: 2 }}></div>


            {/* BOTTOM ROW (user bowl and L/R arrows) */}
            <div className="left-arrow">⬅️</div>
            <UserBowl className="bowl bowl-cell" bowl={ bowl } style={{ gridColumnStart: bowlPosition + 1, gridRowStart: 3 }}/>
            <div className="right-arrow">➡️</div>
        </div>
    );
}

export default Grid;
