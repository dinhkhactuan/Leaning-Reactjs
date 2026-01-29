import bgMain01 from "../IMG/BG-Content-1.png";

const Main01 = () => {
  return (
    <div class="main-content-1">
      <div class="main-content-1-flex">
        <div class="sub-content-1">
          <p>A Digital Product Studio that will Work</p>
        </div>
        <div class="container-content-1">
          <p>
            For <span>Startups</span> , <span>Enterprise leaders</span> ,{" "}
            <span>Media & Publishers</span> and <span>Social Good</span>
          </p>
        </div>
        <div class="btn-content-1">
          <button
            type="button"
            // style="background: rgba(36, 36, 36, 0.2); color:#FFFF ;border: 1px solid rgba(51, 51, 51, 1);margin-right: 13px;"
            style={{
              background: "rgba(36, 36, 36, 0.2)",
              color: "#FFFF",
              border: "1px solid rgba(51, 51, 51, 1)",
              marginRight: "13px",
            }}
          >
            Our work
          </button>
          <button type="button">Contact Us</button>
        </div>
      </div>
      <img
        style={{ width: "100%", height: "40rem" }}
        src={bgMain01}
        alt="Background-content-1"
      />
    </div>
  );
};
export default Main01;
