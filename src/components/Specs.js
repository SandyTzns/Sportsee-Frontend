import "../styles/Specs.css";
import calories from "../assets/calories.png";
import carbs from "../assets/carbs.png";
import protein from "../assets/protein.png";
import fat from "../assets/fat.png";

export const Specs = ({ data }) => {
  // console.log(data);
  let calorie = data.keyData?.calorieCount;
  let proteins = data.keyData?.proteinCount;
  let carbohydrates = data.keyData?.carbohydrateCount;
  let lipids = data.keyData?.lipidCount;
  return (
    <div className="specs-container">
      <div className="cat-wrapper">
        <img src={calories} alt="calories-icon" />
        <div className="category">
          <span className="nb">{calorie}</span>
          <span className="cat-text">Calories</span>
        </div>
      </div>
      <div className="cat-wrapper">
        <img src={protein} alt="calories-icon" />
        <div className="category">
          <span className="nb">{proteins}g</span>
          <span className="cat-text">Proteines</span>
        </div>
      </div>
      <div className="cat-wrapper">
        <img src={carbs} alt="calories-icon" />
        <div className="category">
          <span className="nb">{carbohydrates}g</span>
          <span className="cat-text">Glucides</span>
        </div>
      </div>
      <div className="cat-wrapper">
        <img src={fat} alt="calories-icon" />
        <div className="category">
          <span className="nb">{lipids}g</span>
          <span className="cat-text">Lipides</span>
        </div>
      </div>
    </div>
  );
};
