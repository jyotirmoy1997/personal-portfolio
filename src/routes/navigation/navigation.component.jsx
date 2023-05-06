import { Fragment } from "react"
import { Outlet } from "react-router"
import "./navigation.styles.css"
import logo from "../../assets/logo.png"

const Navigation = () => {
    return(
        <Fragment>
            <div className="nav-wrapper">
                <div>
                    {/* Add Signature Here */}
                    <img src={logo} alt="" height={50} width={50} />
                </div>
                <div className="nav-links">
                    <span>Home</span>
                    <span>Projects</span>
                    <span>Certifications</span>
                    <span>Resume</span>
                </div>
                <div>
                    Hire Me!
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation