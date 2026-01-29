import { useEffect, useState } from "react";
import MainLeft from "../CharacterDetail/CharacterDetail";
import Topcharacter from "../TOPCharacter/TopCharacter";

const URL = "https://zelda.fanapis.com/api/characters";

const Main = () => {
  const [mainCharacter, setMainCharacter] = useState([]);
  const [topCharacters, setTopCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      setMainCharacter(data.data[0]);
      setTopCharacters(data.data.slice(1));
    };

    fetchCharacters();
  });

  return (
    <div className="main">
      <div className="content-main-left">
        {mainCharacter && <MainLeft character={mainCharacter} />}
      </div>

      <div className="main-right">
        <div style={{ padding: "15px 10px" }}>
          <div className="main-right-title">
            <p>TOP Truyện Đề Cử</p>
          </div>

          <div className="content-main-right">
            {topCharacters.map((item, index) => (
              <Topcharacter
                key={item.id}
                index={index + 1}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
