import React from 'react'
import abstractImg from "../../assets/Abstract Design.png";
export default function Hero() {
    return (
        <div className="box-header">
            <section className="text-header">
                <div className="text-child">
                    <p className="text1">A Digital Product Studio</p>
                    <p className="text2">that will Work</p>
                </div>
            </section>

            <div className="pill-container">
                <div className="pill-wrapper">
                    <span className="pill-label">For</span>
                    <div className="pill">Startups</div>
                    <div className="pill">Enterprise leaders</div>
                    <div className="pill">Media &amp; Publishers</div>
                    <span className="pill-label">and</span>
                    <div className="pill">Social Good</div>
                </div>
            </div>

            <div className="btn_silve">
                <button className="btn-Works">Our Works</button>
                <button className="contact_btn">Contact Us</button>
            </div>

            <img src={abstractImg} alt="" className="bieudo" />

            <div className="btn_end">Trusted By 250+ Companies</div>
        </div>
    )
}
