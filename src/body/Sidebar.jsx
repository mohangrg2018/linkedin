import "./Sidebar.css";
import back from "../assets/back.jpeg";
import me from "../assets/me.jpg";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
import Group from "./Group";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__top-section1">
          <img
            src={back}
            alt="Background Image"
            className="sidebar__top-image"
          />
          <img src={me} alt="Profile Image" className="sidebar__top-profile" />
          <h2>Mohan Gurung</h2>
          <p>Wordpress Developer | Web Developer</p>
        </div>
        <div className="sidebar__top-section2">
          <h2>Analytics & tools</h2>
          <p>6 post impressions</p>
        </div>
        <div className="sidebar__top-section3">
          <BsFillBookmarkFill />
          <h2>My items</h2>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p className="sidebar__bottom-title">Recent</p>
        <Group Icon={MdGroups2} title="Digital Marketing" />
        <Group Icon={MdGroups2} title="WordPress Developer" />
        <Group Icon={MdGroups2} title="Web Developer" />
        <Group Icon={MdGroups2} title="Front-End Developer" />
        <div className="sidebar__bottom-group">
          <p className="sidebar__bottom-title">Groups</p>
          <Group Icon={MdGroups2} title="Dental Marketing" />
          <Group Icon={MdGroups2} title="Freelance WordPress Developer" />
          <Group Icon={MdGroups2} title="Dental Sales Profession" />
          <Group Icon={MdGroups2} title="Dental Proffesion" />
          <h3>Show More &darr;</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
