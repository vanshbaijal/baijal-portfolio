import React from "react";
const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2+ Years</span>
            </div>

            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">4+ projects</span>
            </div>

            <div className="about__box">
            <i class='bx bx-desktop about__icon'></i>
                <h3 className="about__title">Open to work</h3>
                <span className="about__subtitle">Available</span>
            </div>
        </div>
    )
}

export default Info