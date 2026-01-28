

import Containerfert from "../components/containertrai/Containerfert";
import Containeright from "../containeright/Containeright";
import "../styles/Styletruyentranh.css";
const Api = "https://zelda.fanapis.com/api/characters"
export default function TruyenTranh({ character }) {
    console.log(character);


    return (
        <div class="main">
            <div class="content-main-left">
                {character?.[0] && (
                    <Containerfert
                        name={character?.[0].name}
                        description={character?.[0].description}
                    />
                )}
            </div>

            <div class="main-right">
                <div style={{ padding: "15px 10px" }}>
                    <div class="main-right-title">
                        <p>TOP Truyện Đề Cử</p>
                        {character?.slice(1)?.map((item, index) => {
                            return <Containeright
                                index={index + 1}
                                name={item.name}
                                description={item.description}
                            />
                        })}
                    </div>
                    <div class="content-main-right"></div>
                </div>
            </div>
        </div>
    )
}
fetch(Api)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        <TruyenTranh character={data.data} />

    })
