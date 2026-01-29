import iconMain04_1 from "../IMG/main-content-4-Icon.png";
import iconMain04_2 from "../IMG/main-content-4-Icon (1).png";
import iconMain04_3 from "../IMG/main-content-4-Icon (2).png";
import iconMain04_4 from "../IMG/main-content-4-Icon (3).png";
import bgMain03 from "../IMG/BG-main-content-3.png";
const Main04 = () => {
  return (
    <div class="main-content-4">
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", opacity: 0.5 }}
          src={bgMain03}
          alt="Background-main-content-3"
        />
        <div class="main-content-3-text">
          <p>Why Choose SquareUp?</p>
          <text>
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results.
          </text>
        </div>
      </div>
      <div class="main-content-4-flex">
        <div class="main-content-4-item">
          <div class="main-content-4-item-title">
            <img src={iconMain04_1} alt="Icon" />
            <p>Expertise</p>
          </div>
          <div class="main-content-4-item-text">
            <p>
              Our team consists of highly skilled professionals who have a deep
              understanding of the digital landscape. We stay updated with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.
            </p>
          </div>
        </div>
        <div class="main-content-4-item">
          <div class="main-content-4-item-title">
            <img src={iconMain04_2} alt="Icon" />
            <p>Client-Centric Approach</p>
          </div>
          <div class="main-content-4-item-text">
            <p>
              We prioritize our clients and their unique needs. We listen to
              your ideas, challenges, and goals, and tailor our services to meet
              your specific requirements. Your success is our success.
            </p>
          </div>
        </div>
      </div>
      <div class="main-content-4-flex">
        <div class="main-content-4-item">
          <div class="main-content-4-item-title">
            <img src={iconMain04_3} alt="Icon" />
            <p>Results-Driven Solutions</p>
          </div>
          <div class="main-content-4-item-text">
            <p>
              Our primary focus is on delivering results. We combine creativity
              and technical expertise to create digital products that drive
              business growth, enhance user experiences, and provide a
              competitive advantage.
            </p>
          </div>
        </div>
        <div class="main-content-4-item">
          <div class="main-content-4-item-title">
            <img src={iconMain04_4} alt="Icon" />
            <p>Collaborative Partnership</p>
          </div>
          <div class="main-content-4-item-text">
            <p>
              We value long-term relationships with our clients. We see
              ourselves as your digital partner, providing ongoing support,
              maintenance, and updates to ensure your digital products continue
              to thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main04;
