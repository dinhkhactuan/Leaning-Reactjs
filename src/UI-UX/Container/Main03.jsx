import Icon from "../IMG/Icon.png";
import bgMain03 from "../IMG/BG-main-content-3.png";

const Main03 = () => {
  return (
    <div class="main-content-3">
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", opacity: 0.5 }}
          src={bgMain03}
          alt="Background-main-content-3"
        />
        <div class="main-content-3-text">
          <p>Our Services</p>
          <text>
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </text>
        </div>
      </div>
      <div class="main-content-3-items">
        <div class="main-content-3-item">
          <div>
            <div style={{ paddingBottom: "40px" }}>
              <img src={Icon} alt="Icon" />
            </div>
            <div
              style={{ paddingBottom: "104px" }}
              class="main-content-3-item-text"
            >
              <p>Design</p>
              <text>
                At Squareup, our design team is passionate about creating
                stunning, user-centric designs that captivate your audience and
                elevate your brand. We believe that great design is not just
                about aesthetics; it's about creating seamless and intuitive
                user experiences.
              </text>
            </div>
          </div>
          <div class="main-content-3-item-btn">
            <button type="button">Learn More</button>
          </div>
        </div>
        <div class="main-content-3-item">
          <div>
            <div style={{ paddingBottom: "104px" }}>
              <img src={Icon} alt="Icon" />
            </div>
            <div
              style={{ paddingBottom: "104px" }}
              class="main-content-3-item-text"
            >
              <p>Design</p>
              <text>
                At Squareup, our design team is passionate about creating
                stunning, user-centric designs that captivate your audience and
                elevate your brand. We believe that great design is not just
                about aesthetics; it's about creating seamless and intuitive
                user experiences.
              </text>
            </div>
          </div>
          <div class="main-content-3-item-btn">
            <button type="button">Learn More</button>
          </div>
        </div>
        <div class="main-content-3-item">
          <div>
            <div style={{ paddingBottom: "104px" }}>
              <img src={Icon} alt="Icon" />
            </div>
            <div
              style={{ paddingBottom: "104px" }}
              class="main-content-3-item-text"
            >
              <p>Design</p>
              <text>
                At Squareup, our design team is passionate about creating
                stunning, user-centric designs that captivate your audience and
                elevate your brand. We believe that great design is not just
                about aesthetics; it's about creating seamless and intuitive
                user experiences.
              </text>
            </div>
          </div>
          <div class="main-content-3-item-btn">
            <button type="button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main03;
