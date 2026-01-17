import num1 from "../assets/1.png";
import num2 from "../assets/2.png";
import num3 from "../assets/3.png";
import num4 from "../assets/4.png";
import num5 from "../assets/5.png";
import num6 from "../assets/6.png";
import num7 from "../assets/7.png";
import num8 from "../assets/Container (8).png";

import Union from "../assets/Union.png";



export default function FAQ() {
    return (
        <section className="faq">
            <div className="faq-wrap">
                <div className="faq-col">
                    <div className="faq-item open">
                        <div className="faq-head">
                            <img className="faq-num" src={num1} alt="" />
                            <div className="faq-main">
                                <div className="faq-q">What services does SquareUp provide?</div>
                                <button className="faq-toggle" type="button" aria-label="toggle">
                                    <img src={Union} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="faq-body">
                            SquareUp offers a range of services including design, engineering, and project management. We specialize in
                            user experience design, web development, mobile app development, custom software development, branding and
                            identity, and more.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-head">
                            <img className="faq-num" src={num2} alt="" />
                            <div className="faq-main">
                                <div className="faq-q">How can SquareUp help my business?</div>
                                <button className="faq-toggle" type="button" aria-label="toggle">
                                    <img src={Union} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="faq-body">
                            We help you design and build digital products that improve conversion, retention, and operations.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-head">
                            <img className="faq-num" src={num3} alt="" />
                            <div className="faq-main">
                                <div className="faq-q">What industries does SquareUp work with?</div>
                                <button className="faq-toggle" type="button" aria-label="toggle">
                                    <img src={Union} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="faq-body">
                            We work across startups, enterprise, media &amp; publishers, and social good organizations.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-head">
                            <img className="faq-num" src={num4} alt="" />
                            <div className="faq-main">
                                <div className="faq-q">How long does it take to complete a project with SquareUp?</div>
                                <button className="faq-toggle" type="button" aria-label="toggle">
                                    <img src={Union} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="faq-body">
                            Timelines vary by scope, but we typically deliver in phases with clear milestones.
                        </div>
                    </div>
                </div>

                <div className="faq-col">
                    <div className="faq-item">
                        <div className="faq-head">
                            <img className="faq-num" src={num5} alt="" />
                            <div className="faq-main">
                                <div className="faq-q">Do you offer ongoing support and maintenance after the project is completed?</div>
                                <button className="faq-toggle" type="button" aria-label="toggle">
                                    <img src={Union} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="faq-body">
                            Yes. We provide support, monitoring, and continuous improvements after launch.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-head">
                            <img className="faq-num" src={num6} alt="" />
                            <div className="faq-main">
                                <div className="faq-q">Can you work with existing design or development frameworks?</div>
                                <button className="faq-toggle" type="button" aria-label="toggle">
                                    <img src={Union} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="faq-body">
                            Absolutely. We can integrate with your current stack and design system.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-head">
                            <img className="faq-num" src={num7} alt="" />
                            <div className="faq-main">
                                <div className="faq-q">How involved will I be in the project development process?</div>
                                <button className="faq-toggle" type="button" aria-label="toggle">
                                    <img src={Union} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="faq-body">
                            You’ll be involved via weekly updates, reviews, and milestone sign-offs.
                        </div>
                    </div>

                    <div className="faq-item">
                        <div className="faq-head">
                            <img className="faq-num" src={num8} alt="" />
                            <div className="faq-main">
                                <div className="faq-q">Can you help with website or app maintenance and updates?</div>
                                <button className="faq-toggle" type="button" aria-label="toggle">
                                    <img src={Union} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="faq-body">
                            Yes, we can handle ongoing updates, bug fixes, and feature enhancements.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
