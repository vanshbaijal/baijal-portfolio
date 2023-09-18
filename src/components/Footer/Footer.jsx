import React from "react";
import "./footer.css";
const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Vansh</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer___link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer___link">Skills</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer___link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.linkedin.com/in/vansh-baijal-4178761ba/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
            <i class='bx bxl-linkedin' ></i>
            </a>

            <a href="https://github.com/vanshbaijal" className="home__social-icon" target="_blank" rel="noopener noreferrer">
            <i class='bx bxl-github' ></i>
            </a>

            <a href="https://www.instagram.com/b_.vansh/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
            <i class="uil uil-instagram"></i>
            </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer