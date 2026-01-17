import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BrandStrip from "../components/BrandStrip/BrandStrip";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import ServiceCards from "../components/ServiceCards.jsx/ServiceCards";

import FeaturesTable from "../components/FeaturesTable/FeaturesTable";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

import FAQ from "../FAQ/FAQ";
import ContactForm from "../ContactForm/ContactForm";

import "../styles/Desktop.css";

import textContainerImg from "../assets/Text Container.png";
import containerImg from "../assets/Container.png";

export default function Home() {
    return (
        <>
            <Navbar />

            <div className="main">
                <Hero />
                <BrandStrip />

                <SectionHeader
                    wrapperClass="Services"
                    bgImg={textContainerImg} 
                    title="Our Services"
                    desc="Transform your brand with our innovative digital solutions that captivate and engage your audience."
                />

                <ServiceCards />

                <div className="Services1">
                    <img src={containerImg} alt="" /> 
                </div>

                <FeaturesTable />

                <div className="wapper_ni">
                    <div className="Services2">
                        <img src={containerImg} alt="" />
                    </div>
                </div>

                <Testimonials />

                <div className="wapper_ni">
                    <div className="Services2">
                        <img src={containerImg} alt="" />
                    </div>
                </div>

                <div className="khung">
                    <div className="hey"></div>
                    <div className="hey"></div>
                </div>

                <FAQ />

                <div className="wapper_ni">
                    <div className="Services2">
                        <img src={containerImg} alt="" /> {/* ✅ sửa */}
                    </div>
                </div>

                <ContactForm />
            </div>

            <Footer />
        </>
    );
}
