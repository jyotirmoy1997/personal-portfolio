import "./projects-preview.styles.css"
import phimg from "../../assets/pc-hunters.png"
import gaimg from "../../assets/gamers-adobe.png"
import mseimg from "../../assets/mse.png"
import { useNavigate } from "react-router"

import reactLogo from "../../assets/react-icon.png"
import expressLogo from "../../assets/express.png"
import nodeLogo from "../../assets/node-js-icon.png"
import mongodbLogo from "../../assets/mongodb.png"
import htmlLogo from "../../assets/html.png"
import cssLogo from "../../assets/css.png"
import jsLogo from "../../assets/js.png"
import pythonLogo from "../../assets/python.png"
import javaLogo from "../../assets/java.png"
import cppLogo from "../../assets/c++.png"
import flaskLogo from "../../assets/flask.png"


const ProjectsPreview = () => {
    const navigate = useNavigate()
    return(
        <div className="projects-preview-wrapper">
            <div className="projects-preview-outer">
                <h1>Projects</h1>
                <div className="projects-preview-inner">

                    <div className="projects-preview-card">
                        <a className="projects-preview-card-img-container" 
                        href="https://pc-hunters.netlify.app/" 
                        target="_blank">
                            <img src={phimg} alt="" />
                        </a>
                        <h3>PC-Hunters :  An E-Commerce Store Prototype</h3>
                        <h5>Tech Stack Used</h5>
                        <div className="project-ts-container">
                            <img src={reactLogo} alt="" height={50} width={50} />
                            <img src={expressLogo} alt="" height={50} width={50} />
                            <img src={nodeLogo} alt="" height={50} width={50} />
                            <img src={mongodbLogo} alt="" height={50} width={50} />
                        </div>
                    </div>

                    <div className="projects-preview-card">
                        <a className="projects-preview-card-img-container"
                        href="https://gamerz-adobe.netlify.app/"
                        target="_blank">
                            <img src={gaimg} alt="" />
                        </a>
                        <h3>Gamerz-Adobe : A Social Media Prototype</h3>
                        <h5>Tech Stack Used</h5>
                        <div className="project-ts-container">
                            <img src={reactLogo} alt="" height={50} width={50} />
                            <img src={expressLogo} alt="" height={50} width={50} />
                            <img src={nodeLogo} alt="" height={50} width={50} />
                            <img src={mongodbLogo} alt="" height={50} width={50} />
                        </div>
                    </div>

                    <div className="projects-preview-card">
                        <a className="projects-preview-card-img-container"
                        href="https://macronutrient-status-esmitamor.onrender.com/"
                        target="_blank"
                        >
                            <img src={mseimg} alt="" />
                        </a>
                        <h3>Macronutrient Status Estimator using Machine Learning</h3>
                        <h5>Tech Stack Used</h5>
                        <div className="project-ts-container">
                            <img src={htmlLogo} alt="" height={50} width={50} />
                            <img src={cssLogo} alt="" height={50} width={50} />
                            <img src={jsLogo} alt="" height={50} width={50} />
                            <img src={pythonLogo} alt="" height={50} width={50} />
                            <img src={flaskLogo} alt="" height={50} width={50} />
                        </div>
                    </div>

                </div>
                <button id="more-projects" onClick={() => navigate("/projects")}>Browse more Projects...</button>
            </div>
        </div>
    )
}

export default ProjectsPreview