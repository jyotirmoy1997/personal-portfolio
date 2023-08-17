import { Fragment } from "react"
import { Outlet } from "react-router"
import "./navigation.styles.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import { useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = () => {
    const navigate = useNavigate()
    const navRef = useRef()
    const showNavBar = () => {
        // console.log("1")
        navRef.current.classList.toggle("responsive-nav")
    }

    return(
        <Fragment>
            <div className="nav-wrapper">
                <Link to="/">
                    {/* Add Signature Here */}
                    <img src={logo} alt="" height={100} width={164} />
                </Link>
                <div  ref={navRef} className="nav-links-container">
                    <div className="nav-links">
                        <Link to="/" onClick={showNavBar}>Home</Link>
                        <Link to="/projects" onClick={showNavBar} >Projects</Link>
                        <Link to="/certifications" onClick={showNavBar} >Certifications</Link>
                    </div>
                    <div>
                        <button id="hire-me-btn" onClick={() => navigate("/contact")}>Hire Me</button>
                    </div>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar} >
                        <GrClose/>
                    </button>
                </div>
                <button className="nav-btn" onClick={showNavBar}>
                    <GiHamburgerMenu/>
                </button>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation