import './UserBowl.css';

const UserBowl = ({ bowl, className, style }) => {
    const buildBowlBackground = () => {
        let gradients = [];
        let start = 0;
        
        bowl.forEach(cereal => {
            const end = start + cereal.amount;

            // Construct gradient from the amount of each cereal in the bowl
            if (cereal.amount > 0) {
                gradients.push(`${cereal.name} ${start}%, ${cereal.name} ${end}%`);
            }

            start = end;
        });

        if (gradients.length === 0) {
            return "transparent";
        }

        if (start < 100) {
            gradients.push(`transparent ${start}%, transparent 100%`);
        }
        
        const bowlBackground = `linear-gradient(to top, ${gradients.join(", ")})`;

        return bowlBackground;
    };


    return <div className={`${className}`} style={{ ...style, background: buildBowlBackground() }}></div>;
};

export default UserBowl;