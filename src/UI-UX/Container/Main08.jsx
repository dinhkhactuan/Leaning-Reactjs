const Main08 = () => {
  return (
    <div class="main-content-8">
      <div class="main-content-8-form-container">
        <div class="main-content-8-input-group">
          <div class="main-content-8-field">
            <label style={{ "padding-bottom": "20px;" }}>Full Name</label>
            <input type="text" placeholder="Type here" />
          </div>
          <div class="main-content-8-field">
            <label style={{ "padding-bottom": "20px;" }}>Email</label>
            <input type="email" placeholder="Type here" />
          </div>
        </div>
        <div class="main-content-8-field">
          <label style={{ "padding-bottom": "40px;" }}>
            Why are you contacting us?
          </label>
          <div class="main-content-8-checkbox-group">
            <div class="main-content-8-checkbox-item">
              <input type="checkbox" id="web" checked />
              <label for="web">Web Design</label>
            </div>
            <div class="main-content-8-checkbox-item">
              <input type="checkbox" id="mobile" />
              <label for="mobile">Mobile App Design</label>
            </div>
            <div class="main-content-8-checkbox-item">
              <input type="checkbox" id="collab" />
              <label for="collab">Collaboration</label>
            </div>
            <div class="main-content-8-checkbox-item">
              <input type="checkbox" id="others" />
              <label for="others">Others</label>
            </div>
          </div>
        </div>
        <div class="main-content-8-field">
          <label style={{ "padding-bottom": "14px;" }}>Your Budget</label>
          <div class="main-content-8-slider-label">
            Slide to indicate your budget range
          </div>
          <div class="main-content-8-slider-wrapper">
            <input
              type="range"
              min="1000"
              max="50000"
              value="15000"
              class="slider"
              id="budgetSlider"
            />
            <div class="main-content-8-slider-values">
              <span>$1000</span>
              <span>$50000</span>
            </div>
          </div>
        </div>
        <div class="main-content-8-field">
          <label>Your Message</label>
          <textarea placeholder="Type here"></textarea>
        </div>
        <button class="main-content-8-submit-btn">Submit</button>
      </div>
    </div>
  );
};
export default Main08;
