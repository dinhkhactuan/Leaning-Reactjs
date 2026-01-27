const Title = ({ title, color, handleClick, ob }) => {
  return <p onClick={handleClick} style={{ fontSize: "20px", color: color }}>{title}</p>;
};

export default Title;