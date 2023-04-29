import "./InputOption.css";

const InputOption = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      {Icon && <Icon className="inputOption__icon" color={color} />}
      <h1>{title}</h1>
    </div>
  );
};

export default InputOption;
