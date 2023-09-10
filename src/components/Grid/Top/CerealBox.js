const CerealBox = ({ color, amount }) => {
    return (
      <div
        className="cereal-box"
        style={{
          background: `linear-gradient(to top, ${color}, ${color} ${amount}%, transparent ${amount}%, transparent)`
        }}
      ></div>
    );
  };

  export default CerealBox;