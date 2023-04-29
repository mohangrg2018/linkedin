import './Group.css'

const Group = ({ Icon, title }) => {
  return (
    <div className="group">
      {Icon && <Icon className="group__icon" />}
      <h2>{title}</h2>
    </div>
  );
};

export default Group;
