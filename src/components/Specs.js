import "../styles/Specs.css";
import calories from "../assets/calories.png";
import carbs from "../assets/carbs.png";
import protein from "../assets/protein.png";
import fat from "../assets/fat.png";

export const Specs = ({ data }) => {
  let calorie = data.keyData?.calorieCount;
  let proteins = data.keyData?.proteinCount;
  let carbohydrates = data.keyData?.carbohydrateCount;
  let lipids = data.keyData?.lipidCount;
  return (
    <div className="specs-container">
      <div className="card">
        <img src={calories} alt="calories-icon" />
        <div className="specs-category">
          <span className="quantity">{calorie}</span>
          <span className="unit">Calories</span>
        </div>
      </div>
      <div className="card">
        <img src={protein} alt="calories-icon" />
        <div className="specs-category">
          <span className="quantity">{proteins}g</span>
          <span className="unit">Proteines</span>
        </div>
      </div>
      <div className="card">
        <img src={carbs} alt="calories-icon" />
        <div className="specs-category">
          <span className="quantity">{carbohydrates}g</span>
          <span className="unit">Glucides</span>
        </div>
      </div>
      <div className="card">
        <img src={fat} alt="calories-icon" />
        <div className="specs-category">
          <span className="quantity">{lipids}g</span>
          <span className="unit">Lipides</span>
        </div>
      </div>
    </div>
  );
};
