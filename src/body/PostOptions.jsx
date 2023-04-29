import "./PostOptions.css";

const PostOptions = ({ Icon, title }) => {
  return (
    <div className="postOptions">
      {Icon && <Icon className="postOptions__image" />}
      <h2>{title}</h2>
    </div>
  );
};

export default PostOptions;
