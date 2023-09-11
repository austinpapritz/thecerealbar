const UserBowl = ({ bowl }) => {
    const buildBowlBackground = () => {
      let gradients = '';
      let start = 0;
  
      bowl.forEach(cereal => {
        const end = start + cereal.amount;
        gradients += `, ${cereal.color} ${start}%, ${cereal.color} ${end}%, transparent ${end}%`;
        start = end;
      });
  
      return `linear-gradient(to top${gradients})`;
    };
  
    return <div className="bowl" style={{ background: buildBowlBackground() }}></div>;
  };

export default UserBowl;