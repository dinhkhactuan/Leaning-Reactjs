import logo1 from "../../assets/Logo (1).png";
import logo2 from "../../assets/Logo (2).png";
import logo3 from "../../assets/Logo (3).png";
import logo4 from "../../assets/Logo (4).png";
import logo5 from "../../assets/Logo (5).png";
import logo6 from "../../assets/Logo (6).png";

export default function BrandStrip() {
    return (
        <section className="brand-strip">
            <div className="brand-inner">
                <img src={logo1} className="brand-item" alt="" />
                <img src={logo2} className="brand-item" alt="" />
                <img src={logo3} className="brand-item" alt="" />
                <img src={logo4} className="brand-item" alt="" />
                <img src={logo5} className="brand-item" alt="" />
                <img src={logo6} className="brand-item" alt="" />
            </div>
        </section>
    );
}
