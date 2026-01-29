import Union from "../IMG/Union.png";
import bgMain03 from "../IMG/BG-main-content-3.png";
const Main06 = () => {
  return (
    <div class="main-content-6">
      <div style={{ position: "relative" }}>
        <img
          style={{ "width:100%;opacity": "0.5;" }}
          src={bgMain03}
          alt="Background-main-content-3"
        />
        <div class="main-content-3-text">
          <p>Frequently Asked Questions</p>
          <text>
            Still you have any questions? Contact our Team via
            hello@squareup.com
          </text>
        </div>
      </div>
      <div class="main-content-6-flex">
        <div>
          <div class="main-content-6-item">
            <div class="main-content-6-item-ordinal">
              <p>01</p>
            </div>
            <div class="main-content-6-item-text">
              <p>What services does SquareUp provide?</p>
            </div>
            <div class="main-content-6-item-icon">
              <img src={Union} alt="Icon" />
            </div>
          </div>
          <div class="main-content-6-item">
            <div class="main-content-6-item-ordinal">
              <p>02</p>
            </div>
            <div class="main-content-6-item-text">
              <p>How can SquareUp help my business?</p>
            </div>
            <div class="main-content-6-item-icon">
              <img src={Union} alt="Icon" />
            </div>
          </div>
          <div class="main-content-6-item">
            <div class="main-content-6-item-ordinal">
              <p>03</p>
            </div>
            <div class="main-content-6-item-text">
              <p>What industries does SquareUp work with?</p>
            </div>
            <div class="main-content-6-item-icon">
              <img src={Union} alt="Icon" />
            </div>
          </div>
          <div class="main-content-6-item">
            <div class="main-content-6-item-ordinal">
              <p>04</p>
            </div>
            <div class="main-content-6-item-text">
              <p>How long does it take to complete a project with SquareUp?</p>
            </div>
            <div class="main-content-6-item-icon">
              <img src={Union} alt="Icon" />
            </div>
          </div>
        </div>
        <div>
          <div class="main-content-6-item">
            <div class="main-content-6-item-ordinal">
              <p>05</p>
            </div>
            <div class="main-content-6-item-text">
              <p>
                Do you offer ongoing support and maintenance after the project
                is completed?
              </p>
            </div>
            <div class="main-content-6-item-icon">
              <img src={Union} alt="Icon" />
            </div>
          </div>
          <div class="main-content-6-item">
            <div class="main-content-6-item-ordinal">
              <p>06</p>
            </div>
            <div class="main-content-6-item-text">
              <p>
                Can you work with existing design or development frameworks?
              </p>
            </div>
            <div class="main-content-6-item-icon">
              <img src={Union} alt="Icon" />
            </div>
          </div>
          <div class="main-content-6-item">
            <div class="main-content-6-item-ordinal">
              <p>07</p>
            </div>
            <div class="main-content-6-item-text">
              <p>How involved will I be in the project development process?</p>
            </div>
            <div class="main-content-6-item-icon">
              <img src={Union} alt="Icon" />
            </div>
          </div>
          <div class="main-content-6-item">
            <div class="main-content-6-item-ordinal">
              <p>08</p>
            </div>
            <div class="main-content-6-item-text">
              <p>Can you help with website or app maintenance and updates?</p>
            </div>
            <div class="main-content-6-item-icon">
              <img src={Union} alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main06;
