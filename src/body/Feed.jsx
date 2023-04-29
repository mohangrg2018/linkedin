import "./Feed.css";
import me from "../assets/me.jpg";
import InputOption from "./InputOption";
import { MdInsertPhoto } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <img src={me} alt="Profile Pic" className="feed__input-image" />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={MdInsertPhoto} title="Photo" color="#378FE9" />
          <InputOption Icon={AiFillYoutube} title="Video" color="#5F9B41" />
          <InputOption
            Icon={BsFillBriefcaseFill}
            title="Jobs"
            color="#A872E8"
          />
          <InputOption
            Icon={RiArticleFill}
            title="Write Article"
            color="#E16745"
          />
        </div>
      </div>
      <div className="post">
        <Post
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/800px-Official_portrait_of_Barack_Obama.jpg"
          name="Mohan Gurung"
          position="WordPress Developer"
          description="Someone told the CIOs in some companies that they can justify the cost of hiring Agile Coaches and Scrum Masters by measuring the progress of their team’s journey towards Agile Maturity."
        />
      </div>
    </div>
  );
};

export default Feed;
