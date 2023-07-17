import "./header.scss";
import { NavLink } from "react-router-dom";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <header>
      <NavLink to={"/"} className="logo">
        Michael
        <LogoDevIcon />
      </NavLink>
      <div className="right">
        <div className="icons">
          <SearchIcon />
          <GridViewIcon />
          <FullscreenIcon />
          <div className="notifications">
            <NotificationsIcon />
            <span>15+</span>
          </div>
        </div>
        <div className="user">
          <img src="/user.svg" alt="" />
          <span>Name</span>
        </div>
        <div className="settings">
          <SettingsIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
