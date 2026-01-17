export default function SectionHeader({ wrapperClass, bgImg, title, desc }) {
    return (
        <div className={wrapperClass}>
            <img src={bgImg} alt="" />
            <div className="OurServices">
                <p className="our">{title}</p>
                <p className="Transform">{desc}</p>
            </div>
        </div>
    );
}
