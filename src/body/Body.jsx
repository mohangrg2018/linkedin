import "./Body.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="body">
      <div className="container body__container">
        <div className="body__left">
          <Sidebar />
        </div>
        <div className="body__main">
          <Feed />
        </div>
        <div className="body__right">
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
};

export default Body;
