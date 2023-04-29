import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../assets/linkedin.png";
import HeaderOption from "./HeaderOption";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import me from "../assets/me.jpg";
// import { BsFillPeopleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="container header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
          <AiOutlineSearch className="header__search-icon" />
          <input type="search" name="" id="" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={AiFillHome} title="Home" />
        <HeaderOption Icon={BsFillPeopleFill} title="My Network" />
        <HeaderOption Icon={BsFillBriefcaseFill} title="Jobs" />
        <HeaderOption Icon={AiFillMessage} title="Messaging" />
        <HeaderOption Icon={AiFillBell} title="Notifications" />
        <HeaderOption avatar={me} title="Me" />
      </div>
    </div>
  );
};

export default Header;
