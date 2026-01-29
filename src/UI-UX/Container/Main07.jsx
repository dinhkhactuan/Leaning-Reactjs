import bgMain07 from "../IMG/BG-main-content-7.png";
import Logo from "../IMG/Logo.png";
const Main07 = () => {
  return (
    <div class="main-content-7">
      <div style={{ position: "relative;" }}>
        <img
          style={{ width: "100%", background: "transparent" }}
          class="mobile-bg-main-content-7"
          src={bgMain07}
          alt="Background-Main-content-7"
        />
        <div class="main-content-7-silder">
          <div style={{ paddingBottom: "50px", background: "transparent" }}>
            <img src={Logo} alt="Icon" />
          </div>
          <div class="main-content-7-silder-text">
            <p>Thank you for your Interest in SquareUp.</p>
            <text>
              We would love to hear from you and discuss how we can help bring
              your digital ideas to life. Here are the different ways you can
              get in touch with us.
            </text>
          </div>
          <div class="main-content-7-silder-btn">
            <button type="button">Start Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main07;
