import PropTypes from "prop-types";
import './Top.css';

const CerealBox = ({ color, amount, className }) => {
    return (
        <div
            className={`${className}`}
            style={{
                background: `linear-gradient(to top, ${color}, ${color} ${amount}%, transparent ${amount}%, transparent)`
            }}
        ></div>
    );
};

CerealBox.propTypes = {
    color: PropTypes.string,
    amount: PropTypes.number,
    className: PropTypes.string,
};

export default CerealBox;