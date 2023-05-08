import { Fragment } from "react"
import { Outlet } from "react-router"
import "./navigation.styles.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Navigation = () => {
    return(
        <Fragment>
            <div className="nav-wrapper">
                <div>
                    {/* Add Signature Here */}
                    <img src={logo} alt="" height={50} width={50} />
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/certifications">Certifications</Link>
                </div>
                <div>
                    <button id="hire-me-btn">Hire Me</button>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation