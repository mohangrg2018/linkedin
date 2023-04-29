import "./Post.css";
import PostOptions from "./PostOptions";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";

const Post = ({ img, name, position, description }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header-profile">
          <img src={img} alt="Profile Photo" />
          <div className="post__header-profile--info">
            <h1>{name}</h1>
            <p>{position}</p>
          </div>
        </div>
        <div className="post__header-follow">
          <h1>+ Follow</h1>
        </div>
      </div>
      <div className="post__message">
        <p>{description}</p>
      </div>
      <div className="postOptions">
        <PostOptions Icon={AiFillLike} title="Like" />
        <PostOptions Icon={AiOutlineMessage} title="Comment" />
        <PostOptions Icon={BiRepost} title="Repost" />
        <PostOptions Icon={BsFillSendFill} title="Send" />
      </div>
    </div>
  );
};

export default Post;
