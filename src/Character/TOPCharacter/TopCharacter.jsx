const Topcharacter = ({ index, name, description }) => {
  return (
    <div className="main-right-TOP-character">
      <div className="main-right-TOP-character-number">
        <p style={{ background: "rgba(210, 105, 30, 0.504)" }}>{index}</p>
      </div>
      <div className="main-right-TOP-character-text">
        <div className="main-right-TOP-character-comic">
          <p className="name-TOP">{name}</p>
        </div>
        <div className="main-right-TOP-character-genre">
          <p className="derection-TOP">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Topcharacter;
