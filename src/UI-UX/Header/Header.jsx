import Logo from "../IMG/Logo.png";
import MenuIcon from "../IMG/Button-menu.png";
const HeaderPage = () => {
  return (
    <div class="justify">
      <header>
        <div class="justify">
          <div class="header">
            <div class="logo">
              <a href="#">
                <img src={Logo} alt="Logo" />
                <p>SquareUp</p>
              </a>
            </div>
            <div class="nav">
              <div class="nav-items">
                <a href="#">Home</a>
              </div>
              <div class="nav-items">
                <a href="#">Services</a>
              </div>
              <div class="nav-items">
                <a href="#">Work</a>
              </div>
              <div class="nav-items">
                <a href="#">Process</a>
              </div>
              <div class="nav-items">
                <a href="#">About</a>
              </div>
              <div class="nav-items">
                <a href="#">Careers</a>
              </div>
            </div>
            <div class="contact">
              <button type="button">Contact Us</button>
            </div>
            <div class="button">
              <img src={MenuIcon} alt="Menu" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default HeaderPage;
