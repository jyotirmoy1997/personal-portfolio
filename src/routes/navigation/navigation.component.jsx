import { Fragment } from "react"
import { Outlet } from "react-router"
import "./navigation.styles.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import { useRef } from 'react';
import hamburgericon from "../../assets/ham.png"
import closeicon from "../../assets/close.png"

const Navigation = () => {
    const navigate = useNavigate()
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return(
        <Fragment>
            <div className="nav-wrapper">
                <Link to="/">
                    <img src={logo} alt="" height={100} width={164} />
                </Link>
                <div  ref={navRef} className="nav-links-container">
                    <div className="nav-links">
                        <Link to="/" onClick={showNavBar}>Home</Link>
                        <Link to="/projects" onClick={showNavBar} >Projects</Link>
                        <Link to="/certifications" onClick={showNavBar} >Certifications</Link>
                    </div>
                    <div>
                        <button id="hire-me-btn" onClick={() =>{
                            navigate("/contact")
                            showNavBar()
                        } }>Hire Me</button>
                    </div>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar} >
                    <img src={closeicon} alt="" width="20px"  />
                    </button>
                </div>
                <button className="nav-btn" onClick={showNavBar}>
                    <img src={hamburgericon} alt="" width="30px"  />
                </button>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation