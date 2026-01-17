export default function ContactForm() {
    return (
        <div className="form">
            <div className="form_list">
                <div className="form_ten">
                    <div className="fullname">
                        <p className="name">Full Name</p>
                        <div className="Type">Type here</div>
                    </div>

                    <div className="fullname">
                        <p className="name">Email</p>
                        <div className="Type">Type here</div>
                    </div>
                </div>

                <div className="form_list2">
                    <h2>Why are you contacting us?</h2>
                    <div className="check">
                        <div className="check1">
                            <label className="check-item">
                                <input type="checkbox" defaultChecked /> Web Design
                            </label>
                            <label className="check-item">
                                <input type="checkbox" /> Mobile App Design
                            </label>
                        </div>

                        <div className="check1">
                            <label className="check-item">
                                <input type="checkbox" /> Collaboration
                            </label>
                            <label className="check-item">
                                <input type="checkbox" /> Others
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form_list3">
                    <div className="Your_Budget">
                        <p className="Your">Your Budget</p>
                        <p className="Slide">Slide to indicate your budget range</p>
                    </div>
                    <div className="thanh">
                        <img src="./assets/Range Slider.png" alt="" />
                    </div>
                </div>

                <div className="form_list3">
                    <h2>Your Message</h2>
                    <div className="for">
                        <div className="Type1">Type here</div>
                    </div>
                </div>

                <button className="Submit">Submit</button>
            </div>
        </div>
    );
}
