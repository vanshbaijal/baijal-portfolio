import React from "react";
import "./skills.css";
import S1 from "./S1";
import S2 from "./S2";
const Skills = () => {
    return (
        <section id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Tech Stack</span>
            <div className="skills__container container grid">
                <S1/>

                <S2/>
            </div>
        </section>
    )
}
export default Skills