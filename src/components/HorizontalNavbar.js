import "../styles/HorizontalNavbar.css";
import logo from "../assets/logo.png";

export const HorizontalNavbar = () => {
  return (
    <div
      className="topnav-container
    "
    >
      <ul className="topnav">
        <li>
          <img src={logo} alt="logo" className="main-logo"></img>
        </li>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};
