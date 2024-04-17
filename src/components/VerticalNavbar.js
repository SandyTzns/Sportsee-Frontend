import "../styles/VerticalNavbar.css";
import iconone from "../assets/iconone.png";
import icontwo from "../assets/icontwo.png";
import iconthree from "../assets/iconthree.png";
import iconfour from "../assets/iconfour.png";
import { Link } from "react-router-dom";

export const VerticalNavbar = () => {
  return (
    <div className="sidebar-container verticalNavbar">
      <ul className="sidebar">
        <Link to="#">
          <li>
            <img src={iconone} alt="iconeone" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icontwo} alt="icontwo" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={iconthree} alt="iconthree" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={iconfour} alt="iconfour" />
          </li>
        </Link>
      </ul>
      <span className="copyright">Copyright, SportSee 2020</span>
    </div>
  );
};
