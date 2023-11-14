import "../styles/VerticalNavbar.css";
import iconone from "../assets/iconone.png";
import icontwo from "../assets/icontwo.png";
import iconthree from "../assets/iconthree.png";
import iconfour from "../assets/iconfour.png";

export const VerticalNavbar = () => {
  return (
    <div className="sidebar-container item item-8">
      <ul className="sidebar">
        <li>
          <img src={iconone} alt="iconeone" />
        </li>
        <li>
          <img src={icontwo} alt="icontwo" />
        </li>
        <li>
          <img src={iconthree} alt="iconthree" />
        </li>
        <li>
          <img src={iconfour} alt="iconfour" />
        </li>
      </ul>
      <span className="copyright">Copyright, SportSee 2020</span>
    </div>
  );
};
