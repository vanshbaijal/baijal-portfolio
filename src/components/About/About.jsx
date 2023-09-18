import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";
const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">Introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">I'm a dedicated and results-driven professional with a diverse skill set and a passion for continuous learning. I thrive in dynamic environments and collaborate effectively with multidisciplinary teams. My strong foundation in computer science encompasses subjects like architecture, data structures, software engineering, and more. I'm proficient in C, C++, Python, and web technologies like HTML, CSS, and JavaScript. I'm eager to contribute my adaptability and technical acumen to new opportunities, positively impacting teams and projects.
                    </p>

                </div>
            </div>
        </section>
    )
}
export default About