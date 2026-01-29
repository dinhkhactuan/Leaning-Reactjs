import profile from "../../assets/Profile.png";
import nguoi2 from "../../assets/nguoi2.png";
import nguoi3 from "../../assets/nguoi3.png";
import nguoi4 from "../../assets/nguoi4.png";
import nguoi5 from "../../assets/nguoi5.png";
import nguoi6 from "../../assets/nguoi6.png";

function TestimonialCard({ title, desc, avatar, name, role }) {
    return (
        <div className="child2">
            <div className="chill">
                <p className="chill-gil">{title}</p>
                <p className="chill-gil2">{desc}</p>
            </div>

            <div className="khanhhh">
                <div className="profile">
                    <img src={avatar} alt="" />
                    <div className="qkhanh">
                        <p className="name">{name}</p>
                        <p className="role">{role}</p>
                    </div>
                </div>

                <button className="btn-Open">Open Website</button>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <>
            <div className="table2">
                <div className="cha2">
                    <TestimonialCard
                        title="SquareUp has been Instrumental in Transforming our Online Presence."
                        desc="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences."
                        avatar={profile}
                        name="Mark Thompson"
                        role="CEO of EventMasters"
                    />

                    <TestimonialCard
                        title="Working with SquareUp was a breeze."
                        desc="They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend"
                        avatar={nguoi2}
                        name="Sarah Johnson"
                        role="Founder of HungryBites."
                    />
                </div>
            </div>

            <div className="table2">
                <div className="cha2">
                    <TestimonialCard
                        title="SquareUp developed a comprehensive booking and reservation system for our event management company"
                        desc="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences"
                        avatar={nguoi3}
                        name="Mark Thompson"
                        role="CEO of EventMasters"
                    />

                    <TestimonialCard
                        title="ProTech Solutions turned to SquareUp to automate our workflow"
                        desc="They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner."
                        avatar={nguoi4}
                        name="Laura Adams"
                        role="COO of ProTech Solutions."
                    />
                </div>
            </div>

            <div className="table2">
                <div className="cha2">
                    <TestimonialCard
                        title="SquareUp developed a comprehensive booking and reservation system for our event management company"
                        desc="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences."
                        avatar={nguoi5}
                        name="Mark Thompson"
                        role="CEO of EventMasters"
                    />

                    <TestimonialCard
                        title="ProTech Solutions turned to SquareUp to automate our workflow"
                        desc="They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner."
                        avatar={nguoi6}
                        name="Laura Adams"
                        role="COO of ProTech Solutions."
                    />
                </div>
            </div>
        </>
    );
}
