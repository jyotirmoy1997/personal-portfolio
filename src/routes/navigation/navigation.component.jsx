import { Fragment } from "react"
import { Outlet } from "react-router"
import "./navigation.styles.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"

const Navigation = () => {
    const navigate = useNavigate()
    return(
        <Fragment>
            <div className="nav-wrapper">
                <Link to="/">
                    {/* Add Signature Here */}
                    <img src={logo} alt="" height={100} width={164} />
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/certifications">Certifications</Link>
                </div>
                <div>
                    <button id="hire-me-btn" onClick={() => navigate("/contact")}>Hire Me</button>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation