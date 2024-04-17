import "../styles/HorizontalNavbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const HorizontalNavbar = () => {
  return (
    <div className="topnav-container navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="main-logo"></img>
      </Link>
      <div className="nav_links">
        <Link to="#">Accueil</Link>
        <Link to="/">Profil</Link>
        <Link to="#">Réglage</Link>
        <Link to="#">Communauté</Link>
      </div>
    </div>
  );
};
