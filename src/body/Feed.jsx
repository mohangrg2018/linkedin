import "./Feed.css";
import me from "../assets/me.jpg";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <img src={me} alt="Profile Pic" className="feed__input-image"/>
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;
