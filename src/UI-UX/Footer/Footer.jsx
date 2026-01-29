import Logo from "../IMG/Logo.png";
import FacebookIcon from "../IMG/Button.png";
import TwitterIcon from "../IMG/Button (1).png";
import InstagramIcon from "../IMG/Button (2).png";
import btnFooter_1 from "../IMG/footer-Icon.png";
import btnFooter_2 from "../IMG/footer-Icon (1).png";
import btnFooter_3 from "../IMG/footer-Icon (2).png";
const Footer = () => {
  return (
    <div class="justify">
      <footer>
        <div class="justify">
          <div class="footer-top">
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
            <div class="connect">
              <p>Stay Connected</p>
              <a href="#">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={TwitterIcon} alt="Twitter" />
              </a>
              <a href="#">
                <img src={InstagramIcon} alt="Instargram" />
              </a>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-bottom-left">
              <div class="footer-bottom-left-inf">
                <img src={btnFooter_1} alt="Icon" />
                <p>hello@squareup.com</p>
              </div>
              <div class="footer-bottom-left-inf">
                <img src={btnFooter_2} alt="Icon" />
                <p>+91 91813 23 2309</p>
              </div>
              <div class="footer-bottom-left-inf">
                <img src={btnFooter_3} alt="Icon" />
                <p>Somewhere in the World</p>
              </div>
            </div>
            <div class="footer-bottom-right">
              <p>© 2023 SquareUp. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
