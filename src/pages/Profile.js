import { Link } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="users">
      <Link to="/user/12">
        <h1> KARL</h1>
      </Link>
      <Link to="/user/18">
        <h1>CÉCILIA</h1>
      </Link>
    </div>
  );
}

export default Profile;
