import "./HeaderOption.css";

const HeaderOption = ({ Icon, title, avatar }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <img className="headerOption__avatar" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
