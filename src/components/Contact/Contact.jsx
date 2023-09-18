import React from "react";
import "./contact.css"
const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get In Touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__card">
                            {/* <div className="contact__icon"> */}
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            {/* </div> */}

                            <h3 className="contact__card-title">Email</h3>
                            {/* <span className="contact__card-data">vansh.baijal2010@gmail.com</span> */}

                            <a href="mailto:vansh.baijal2010@gmail.com" className="contact__button">vansh.baijal2010@gmail.com {" "} 
                            {/* <i className="bx bx-right-arrow-alt contact__button-icon"></i> */}
                            </a>
                        </div>

                        <div className="contact__card">
                            {/* <div className="contact__icon"> */}
                            <i className='bx bxl-whatsapp contact__card-icon' ></i> 
                            {/* </div> */}

                            <h3 className="contact__card-title">Phone</h3>
                            {/* <span className="contact__card-data">97564-06996</span> */}

                            <a href="https://api.whatsapp.com/send?phone=+91-9756406996&text=Hello!" className="contact__button">97564-06996 {" "} 
                            {/* <i className="bx bx-right-arrow-alt contact__button-icon"></i> */}
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Contact