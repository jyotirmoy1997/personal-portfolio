import ProjectCard from "../../components/project-card/project-card.component"
import phimg from "../../assets/pc-hunters.png"
import gaimg from "../../assets/gamers-adobe.png"
import mseimg from "../../assets/mse.png"
import converter from "../../assets/converter.png"

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

import Footer from "../../components/footer/footer.component"

import "./projects.styles.css"




const details = [
    {
        id : 1,
        liveLink : "https://pc-hunters.netlify.app/",
        gitHubLink : "https://github.com/jyotirmoy1997/PC-Hunters",
        image : phimg,
        heading : "PC-Hunters :  An E-Commerce Store Prototype",
        ts : [
            reactLogo, expressLogo, nodeLogo, mongodbLogo
        ]
    },
    {
        id : 2,
        liveLink : "https://gamerz-adobe.netlify.app/",
        gitHubLink : "https://github.com/jyotirmoy1997/Gamerz-AdobeV2",
        image : gaimg,
        heading : "Gamerz-Adobe : A Social Media Prototype",
        ts : [
            reactLogo, expressLogo, nodeLogo, mongodbLogo
        ]
    },
    {
        id : 3,
        liveLink : "https://macronutrient-status-esmitamor.onrender.com/",
        gitHubLink : "https://github.com/jyotirmoy1997/Macro-Nutrient-Classification",
        image : mseimg,
        heading : "Macronutrient Status Estimator using Machine Learning",
        ts : [
            htmlLogo, cssLogo, jsLogo, pythonLogo, flaskLogo
        ]
    },
    {
        id : 4,
        liveLink : "https://currency-converter-global.netlify.app/",
        gitHubLink : "https://github.com/jyotirmoy1997/currency-converter",
        image : converter,
        heading : "Currency Converter using ReactJS",
        ts : [
            reactLogo, cssLogo, htmlLogo, jsLogo
        ]
    }
]

const Projects = () => {
    return(
        <div className="projects-container-wrapper">
            <div className="projects-container">
                {
                    details.map((det) => <ProjectCard key={det.id} details={det} />)
                }
            </div>
            <Footer/>
        </div>
        
    )
}

export default Projects