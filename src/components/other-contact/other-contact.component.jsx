import phonelogo from "../../assets/phone.png"
import wapplogo from "../../assets/whatsapp.png"
import emaillogo from "../../assets/email.png"
import "./other-contact.styles.css"

const OtherContact = () => {
    return(
        <div className="other-contact-wrapper">

            <div className="other-contact-inner">
                <div className="other-contact-inner-img-container">
                    <img src={phonelogo} alt="" />
                </div>
                <div className="oth-card">
                    <span>Contact on Phone</span>
                    <span>+918637515971</span>
                </div>
            </div>

            <div className="other-contact-inner">
                <div className="other-contact-inner-img-container">
                    <img src={emaillogo} alt="" />
                </div>
                <div className="oth-card">
                    <span>Contact on Email</span>
                    <span>jyotirmoy.031997@gmail.com</span>
                </div>
            </div>

            <div className="other-contact-inner">
                <div className="other-contact-inner-img-container">
                    <img src={wapplogo} alt="" />
                </div>
                <div className="oth-card">
                    <span>Contact on Whatsapp</span>
                    <span>+918637515971</span>
                </div>
            </div>
        </div>
    )
}

export default OtherContact