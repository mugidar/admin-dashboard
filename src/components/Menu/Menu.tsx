import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ClassIcon from "@mui/icons-material/Class";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import BackupIcon from "@mui/icons-material/Backup";
import BarChartIcon from "@mui/icons-material/BarChart";
import BackupTableIcon from "@mui/icons-material/BackupTable";

import "./menu.scss";
const links = {
  main: {
    groupTitle: "Main",
    items: [
      { title: "Homepage", url: "/", icon: <HomeIcon /> },
      { title: "Profile", url: "/profile", icon: <AccountBoxIcon /> }
    ]
  },
  lists: {
    groupTitle: "Lists",
    items: [
      { title: "Users", url: "/users", icon: <GroupIcon /> },
      { title: "Products", url: "/products", icon: <CategoryIcon /> },
      { title: "Orders", url: "/orders", icon: <BorderColorIcon /> },
      { title: "Posts", url: "/posts", icon: <PostAddIcon /> }
    ]
  },
  general: {
    groupTitle: "General",
    items: [
      { title: "Elements", url: "/elements", icon: <FormatListBulletedIcon /> },
      { title: "Notes", url: "/notes", icon: <EditNoteIcon /> },
      { title: "Forms", url: "/forms", icon: <ClassIcon /> },
      { title: "Calendar", url: "/calendar", icon: <CalendarMonthIcon /> }
    ]
  },
  maintance: {
    groupTitle: "Maintance",
    items: [
      { title: "Settings", url: "/settings", icon: <SettingsIcon /> },
      { title: "Backups", url: "/backups", icon: <BackupIcon /> }
    ]
  },
  analytics: {
    groupTitle: "Analytics",
    items: [
      { title: "Charts", url: "/charts", icon: <BarChartIcon /> },
      { title: "Logs", url: "/logs", icon: <BackupTableIcon /> }
    ]
  }
};

const Menu = () => {
  return (
    <div className="menu">
      <div className="links">
        {Object.values(links).map(
          (link) =>
            link.groupTitle && (
              <ul key={link.groupTitle}>
                <h4>{link.groupTitle}</h4>
                {link.items?.map((item) => (
                  <NavLink className={({isActive}) => isActive ? "active" : "not-active "} key={item.url} to={item.url}>
                    <li  key={item.title}>
                      {item?.icon}
                      {item.title}
                    </li>
                  </NavLink>
                ))}
              </ul>
            )
        )}
      </div>
    </div>
  );
};

export default Menu;
