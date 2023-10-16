import "./navBar.scss";
import { HomeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import { WbSunnyOutlined } from "@mui/icons-material";
import { GridViewOutlined } from "@mui/icons-material";
import { NotificationsOutlined } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material";
import { PersonOutlined } from "@mui/icons-material";
import { SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }} />
        <span>JredSocial</span>
        <HomeOutlined />
        <DarkModeOutlined />
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};
