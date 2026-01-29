import Card1 from "../IMG/Card (1).png";
import Card2 from "../IMG/Card (2).png";
import Card3 from "../IMG/Card (3).png";
import Card4 from "../IMG/Card (4).png";
import Card5 from "../IMG/Card (5).png";
import Card from "../IMG/Card.png";
const Main02 = () => {
  return (
    <div class="main-content-2">
      <div class="sub-card">
        <p>Trusted By 250+ Companies</p>
      </div>
      <div class="card">
        <img src={Card} alt="Card" />
      </div>
      <div class="card">
        <img src={Card1} alt="Card" />
      </div>
      <div class="card">
        <img src={Card2} alt="Card" />
      </div>
      <div class="card">
        <img src={Card3} alt="Card" />
      </div>
      <div class="card">
        <img src={Card4} alt="Card" />
      </div>
      <div class="card">
        <img src={Card5} alt="Card" />
      </div>
    </div>
  );
};

export default Main02;
