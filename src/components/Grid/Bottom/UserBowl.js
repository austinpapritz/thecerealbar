import './UserBowl.css';

const UserBowl = ({ bowl, className }) => {
    const buildBowlBackground = () => {
        let gradients = [];
        let start = 0;

        bowl.forEach(cereal => {
            const end = start + cereal.amount;
            if (cereal.amount > 0) {
                gradients.push(`${cereal.cereal} ${start}%, ${cereal.cereal} ${end}%`);
            }
            start = end;
        });

        if (gradients.length === 0) {
            return "transparent";
        }

        return `linear-gradient(to top, ${gradients.join(", ")})`;
    };


    return <div className={`bowl ${className}`} style={{ background: buildBowlBackground() }}></div>;
};

export default UserBowl;