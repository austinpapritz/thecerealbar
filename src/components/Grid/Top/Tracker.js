import PropTypes from "prop-types";
import './Top.css';

const Tracker = ({ bowl }) => {
    const totalGramsInBowl = bowl.reduce((acc, c) => acc + c.amount, 0);
    return (
        <div className="tracker-container">
            <div className="tracker-content">
                <h2>Totals</h2>
                <ul>
                    {bowl.map((c, key) => {
                        return <li key={key}>{c.name}: {c.amount}g</li>
                    })}
                </ul>
                <h3>Total: {totalGramsInBowl}g </h3>
            </div>
        </div>
    );
};


Tracker.propTypes = {
    bowl: PropTypes.object,
    name: PropTypes.string,
    amount: PropTypes.number
};

export default Tracker;