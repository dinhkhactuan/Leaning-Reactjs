import logo from "../../assets/Logo.png";
import fb from "../../assets/fb.png";
import twe from "../../assets/twe.png";
import linkedin from "../../assets/in.png";

import emailIcon from "../../assets/emaill.png";
import phoneIcon from "../../assets/sdt.png";
import locationIcon from "../../assets/dc.png";

export default function Footer() {
    return (
        <div className="cuoi">
            <div className="end">
                <div className="navbarend">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <span>Square Up</span>
                    </div>

                    <ul className="nav-ul">
                        <li className="link-nav"><a href="">Home</a></li>
                        <li className="link-nav"><a href="">Services</a></li>
                        <li className="link-nav"><a href="">Work</a></li>
                        <li className="link-nav"><a href="">Process</a></li>
                        <li className="link-nav"><a href="">About</a></li>
                        <li className="link-nav"><a href="">Careers</a></li>
                    </ul>

                    <div className="Stay_Connected">
                        <p>Stay Connected</p>
                        <div className="tiktok">
                            <img src={fb} alt="" />
                            <img src={twe} alt="" />
                            <img src={linkedin} alt="" />
                        </div>
                    </div>
                </div>

                <div className="heheehe">
                    <div className="_icon">
                        <div className="email">
                            <img src={emailIcon} alt="" />
                            <span>hello@squareup.com</span>
                        </div>

                        <div className="sdt">
                            <img src={phoneIcon} alt="" />
                            <span>+91 91813 23 2309</span>
                        </div>

                        <div className="dt">
                            <img src={locationIcon} alt="" />
                            <span>Somewhere in the World</span>
                        </div>
                    </div>

                    <div className="copy111">© 2023 SquareUp. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
}
