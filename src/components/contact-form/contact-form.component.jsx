import "./contact-form.styles.css"

const ContactForm = () => {
    return(
        <div className="contact-form-wrapper">
            <form action="">
                <label className="el1" htmlFor="">Name</label>
                <input className="el2" type="text" />
                <label className="el3" htmlFor="">Email</label>
                <input className="el4" type="text" />
                <label className="el5" htmlFor="">Subject</label>
                <input className="el6" type="text" />
                <label className="el7" htmlFor="">Message</label>
                <textarea className="el8" type="text" />
                <button>Drop a Message</button>
            </form>
        </div>
    )
}

export default ContactForm