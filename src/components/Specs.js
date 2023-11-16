import "../styles/Specs.css";
import calories from "../assets/calories.png";
import carbs from "../assets/carbs.png";
import protein from "../assets/protein.png";
import fat from "../assets/fat.png";

export const Specs = ({ data }) => {
  return (
    <div className="specs-container item item-3">
      <div className="cat-wrapper">
        <img src={calories} alt="calories-icon" />
        <div className="category">
          <span className="nb">{data.calorie}Cal</span>
          <span className="cat-text">Calories</span>
        </div>
      </div>
      <div className="cat-wrapper">
        <img src={protein} alt="calories-icon" />
        <div className="category">
          <span className="nb">{data.protein}g</span>
          <span className="cat-text">Proteines</span>
        </div>
      </div>
      <div className="cat-wrapper">
        <img src={carbs} alt="calories-icon" />
        <div className="category">
          <span className="nb">{data.fat}g</span>
          <span className="cat-text">Glucides</span>
        </div>
      </div>
      <div className="cat-wrapper">
        <img src={fat} alt="calories-icon" />
        <div className="category">
          <span className="nb">{data.carbs}g</span>
          <span className="cat-text">Lipides</span>
        </div>
      </div>
    </div>
  );
};
