import "./contact-form.styles.css"
import { useState } from "react"
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import { validateEmail } from "../../utils/validator";

const serviceID = import.meta.env.VITE_SERVICE_ID
const templateID = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

const errMsg = "Please fill this field"


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        subject : "",
        message : ""
    })

    const [error, setError] = useState("")
    const [emailError, setEmailError] = useState("")

    const nameRef = useRef()
    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()
    const form = useRef();

    const updateForm = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if(formData.name === ""){
            setError(errMsg)
            nameRef.current.classList.add("err-class")
        }
        if(!validateEmail(formData.email)){
            setEmailError("Please Enter a valid Email Address")
            emailRef.current.classList.add("err-class")
        }
        if(formData.subject === ""){
            setError(errMsg)
            subjectRef.current.classList.add("err-class")
        }
        if(formData.message === ""){
            setError(errMsg)
            messageRef.current.classList.add("err-class")
        }
        if(formData.name !== "" 
            && formData.email !== "" 
            && formData.subject !== "" 
            && formData.message !== ""){
    
            emailjs.sendForm(serviceID, templateID, form.current, publicKey)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                })
            }
    }
    return(
        <div className="contact-form-wrapper">
            <form action="" onSubmit={onSubmitHandler} ref={form}>
                <label className="el1" htmlFor="">
                    <span>Name</span>
                    <span className="err-msg">{error}</span> 
                </label>
                <input 
                    className="el2" 
                    type="text" 
                    onChange={updateForm} 
                    value={formData.name}
                    name="name"
                    ref={nameRef}
                />
                <label className="el3" htmlFor="" >
                    <span>Email</span>
                    <span className="err-msg">{emailError}</span> 
                </label>
                <input 
                    className="el4" 
                    type="text" 
                    onChange={updateForm} 
                    value={formData.email}
                    name="email"
                    ref={emailRef}
                />
                <label className="el5" htmlFor="">
                    <span>Subject</span>
                    <span className="err-msg">{error}</span>
                </label>
                <input 
                    className="el6" 
                    type="text" 
                    onChange={updateForm} 
                    value={formData.subject}
                    name="subject"
                    ref={subjectRef}
                />
                <label className="el7" htmlFor="">
                    <span>Message</span>
                    <span className="err-msg">{error}</span>
                </label>
                <textarea 
                    className="el8" 
                    type="text" 
                    onChange={updateForm} 
                    value={formData.message}
                    name="message"
                    ref={messageRef}
                />
                <button id="msg-drop" onClick={onSubmitHandler}>Drop a Message</button>
            </form>
        </div>
    )
}

export default ContactForm