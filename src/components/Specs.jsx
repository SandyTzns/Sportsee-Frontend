import "../styles/Specs.css";
import calories from "../assets/calories.png";
import carbs from "../assets/carbs.png";
import protein from "../assets/protein.png";
import fat from "../assets/fat.png";

export const Specs = () => {
  return (
    <div className="specs-container">
      <div className="cat-wrapper">
        <img src={calories} alt="calories-icon" />
        <div className="category">
          <span className="nb">1988Cal</span>
          <span className="cat-text">Calories</span>
        </div>
      </div>
      <div className="cat-wrapper">
        <img src={protein} alt="calories-icon" />
        <div className="category">
          <span className="nb">123g</span>
          <span className="cat-text">Proteines</span>
        </div>
      </div>
      <div className="cat-wrapper">
        <img src={carbs} alt="calories-icon" />
        <div className="category">
          <span className="nb">456g</span>
          <span className="cat-text">Glucides</span>
        </div>
      </div>
      <div className="cat-wrapper">
        <img src={fat} alt="calories-icon" />
        <div className="category">
          <span className="nb">789g</span>
          <span className="cat-text">Lipides</span>
        </div>
      </div>
    </div>
  );
};
