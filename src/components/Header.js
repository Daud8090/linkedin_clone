// import { useState } from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from 'react-router-dom';

const Header = () => {
  //   const [user, setUser] = useState("Guest");
  return (
    <header
      style={{ backgroundColor: "#0a66c2", color: "#fff", padding: "10px" }}
    >
      <div className="header-left">
        <h1>LinkedIn</h1>
      </div>
      <nav className="header-center">
        <ul>
          <li>
          <Link to="/"><HomeIcon /> Home</Link>
          </li>
          <li>
          <Link to="/mynetwork"><PeopleIcon /> My Network</Link>
          </li>
          <li>
          <Link to="/jobs"><WorkIcon /> Jobs</Link>
          </li>
          <li>
          <Link to="/messaging"><MessageIcon /> Messaging</Link>
          </li>
          <li>
          <Link to="/notifications"><NotificationsIcon /> Notifications</Link>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <button className="profile-button">Profile</button>
      </div>
      {/* <p>Welcome, {user}!</p>
      <button
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          backgroundColor: "#fff",
          color: "#0a66c2",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setUser("daud")}
      >
        Log In
      </button> */}
    </header>
  );
};

export default Header;
