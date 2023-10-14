import "./navBar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import {
  DarkModeOutlined,
  EmailOutlined,
  GridViewOutlined,
  HomeOutlined,
  NotificationsOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>FaceBook</span>
        </Link>
        <HomeOutlined />
        {darkMode ? (
          <WbSunnyOutlined onClick={toggle} style={{ cursor: "pointer" }} />
        ) : (
          <DarkModeOutlined onClick={toggle} style={{ cursor: "pointer" }} />
        )}

        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search FaceBook..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <Link
            to="/profile/:id"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>{currentUser.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
