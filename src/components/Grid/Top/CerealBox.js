import './CerealBox.css';

const CerealBox = ({ color, amount, className }) => {
    console.log('className', className)
    return (
        <div
            className={`${className}`}
            style={{
                background: `linear-gradient(to top, ${color}, ${color} ${amount}%, transparent ${amount}%, transparent)`
            }}
        ></div>
    );
};

export default CerealBox;