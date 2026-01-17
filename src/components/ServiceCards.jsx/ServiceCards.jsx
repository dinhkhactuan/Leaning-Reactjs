import icon1 from "../../assets/Icon.png";
import icon2 from "../../assets/Icon (1).png";
import icon3 from "../../assets/Icon (2).png";

const cards = [
    {
        icon: icon1,
        title: "Design",
        desc:
            "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    },
    {
        icon: icon2,
        title: "Engineering",
        desc:
            "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    },
    {
        icon: icon3,
        title: "Project Management",
        desc:
            "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        last: true,
    },
];

export default function ServiceCards() {
    return (
        <div className="cards3">
            {cards.map((c, idx) => (
                <div key={idx} className={`card ${c.last ? "card-last" : ""}`}>
                    <div className="card-icon">
                        <img src={c.icon} alt="" />
                    </div>

                    <h3 className="card-title">{c.title}</h3>
                    <p className="card-desc">{c.desc}</p>

                    <button className="card-btn">Learn More</button>
                </div>
            ))}
        </div>
    );
}
