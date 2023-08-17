import OtherContact from "../../components/other-contact/other-contact.component"
import ContactForm from "../../components/contact-form/contact-form.component"
import Footer from "../../components/footer/footer.component"
import "./contact-page.styles.css"

const ContactPage = () => {
    return(
        <div className="contact-page-wrapper">
            <h1>Contact Me !</h1>
            <div className="contact-page-inner">
                <OtherContact />
                <ContactForm />
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage