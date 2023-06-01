import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">KiranSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="search for friend,post, or video "
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">Homepage</div>
        <div className="topbarLink">Timeline</div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
