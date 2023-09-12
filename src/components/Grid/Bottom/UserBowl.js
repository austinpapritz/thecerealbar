import './UserBowl.css';

const UserBowl = ({ bowl, className, style }) => {
    const buildBowlBackground = () => {
        let gradients = [];
        let start = 0;

        bowl.forEach(cereal => {
            const end = start + cereal.amount;
            if (cereal.amount > 0) {
                gradients.push(`${cereal.name} ${start}%, ${cereal.name} ${end}%`);
            }
            start = end;
        });

        if (gradients.length === 0) {
            return "transparent";
        }

        gradients.push(`transparent ${start}%, transparent 100%`);
        
        const css = `linear-gradient(to top, ${gradients.join(", ")})`;
        console.log('css', css)
        return css;
    };


    return <div className={`${className}`} style={{...style, background: buildBowlBackground() }}></div>;
};

export default UserBowl;