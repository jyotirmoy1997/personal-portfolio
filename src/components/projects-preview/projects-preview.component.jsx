import "./projects-preview.styles.css"
import phimg from "../../assets/pc-hunters.png"
import gaimg from "../../assets/gamers-adobe.png"
import mseimg from "../../assets/mse.png"

const ProjectsPreview = () => {
    return(
        <div className="projects-preview-wrapper">
            <div className="projects-preview-outer">

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
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
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
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
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
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>

                </div>
                <button id="more-projects">Browse more Projects...</button>
            </div>
        </div>
    )
}

export default ProjectsPreview