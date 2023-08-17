import "./tech-stack.styles.css"
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
import reduxLogo from "../../assets/redux.png"

import { Tooltip } from "react-tooltip"
import 'react-tooltip/dist/react-tooltip.css'


const TechStack = () => {
    return(
        <div className="tech-stack-outer">
            <h1>Tech Stack</h1>
            <div className="tech-stack-inner">
                <div className="tech-stack-container">
                    <div className="ts-img-container"
                        data-tooltip-id="react-tooltip" 
                        data-tooltip-content="ReactJS" 
                        data-tooltip-float={true} >
                        <Tooltip id="react-tooltip" />
                        <img src={reactLogo} alt="" />
                    </div>
                    <div className="ts-img-container"
                    data-tooltip-id="express-tooltip" 
                    data-tooltip-content="ExpressJS" 
                    data-tooltip-float={true} >
                        <Tooltip id="express-tooltip" />
                        <img src={expressLogo} alt="" />
                    </div>
                    <div className="ts-img-container"
                    data-tooltip-id="node-tooltip" 
                    data-tooltip-content="NodeJS" 
                    data-tooltip-float={true} >
                        <Tooltip id="node-tooltip" />
                        <img src={nodeLogo} alt="" />
                    </div>
                    <div className="ts-img-container"
                    data-tooltip-id="mongo-tooltip" 
                    data-tooltip-content="MongoDB" 
                    data-tooltip-float={true}>
                        <Tooltip id="mongo-tooltip" />
                        <img src={mongodbLogo} alt="" />
                    </div>
                </div>
                <div className="tech-stack-container">
                    <div className="ts-img-container"
                    data-tooltip-id="redux-tooltip" 
                    data-tooltip-content="React Redux" 
                    data-tooltip-float={true} >
                        <Tooltip id="redux-tooltip" />
                        <img src={reduxLogo} alt="" />
                    </div>
                    <div className="ts-img-container"
                    data-tooltip-id="html-tooltip" 
                    data-tooltip-content="HTML" 
                    data-tooltip-float={true}>
                    <Tooltip id="html-tooltip" />
                        <img src={htmlLogo} alt="" />
                    </div>
                    <div className="ts-img-container"
                    data-tooltip-id="css-tooltip" 
                    data-tooltip-content="CSS" 
                    data-tooltip-float={true} >
                    <Tooltip id="css-tooltip" />
                        <img src={cssLogo} alt="" />
                    </div>
                    <div className="ts-img-container"
                    data-tooltip-id="js-tooltip" 
                    data-tooltip-content="JavaScript" 
                    data-tooltip-float={true}>
                    <Tooltip id="js-tooltip" />
                        <img src={jsLogo} alt="" />
                    </div>
                    
                </div>
                <div className="tech-stack-container">
                    <div className="ts-img-container"
                    data-tooltip-id="python-tooltip" 
                    data-tooltip-content="TypeScript" 
                    data-tooltip-float={true} >
                    <Tooltip id="typescript-tooltip" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                    </div>
                    <div className="ts-img-container"
                     data-tooltip-id="npm-tooltip" 
                     data-tooltip-content="NPM" 
                     data-tooltip-float={true} >
                    <Tooltip id="npm-tooltip" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="" />
                    </div>
                    <div className="ts-img-container"
                     data-tooltip-id="git-tooltip" 
                     data-tooltip-content="Git" 
                     data-tooltip-float={true} >
                    <Tooltip id="git-tooltip" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                    </div>
                    <div className="ts-img-container"
                     data-tooltip-id="jupyter-tooltip" 
                     data-tooltip-content="Jupyter" 
                     data-tooltip-float={true} >
                    <Tooltip id="jupyter-tooltip" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" />
                    </div>
                    
                </div>
                <div className="tech-stack-container">
                    <div className="ts-img-container"
                    data-tooltip-id="python-tooltip" 
                    data-tooltip-content="Python" 
                    data-tooltip-float={true} >
                    <Tooltip id="python-tooltip" />
                        <img src={pythonLogo} alt="" />
                    </div>
                    <div className="ts-img-container"
                     data-tooltip-id="flask-tooltip" 
                     data-tooltip-content="Python Flask" 
                     data-tooltip-float={true} >
                    <Tooltip id="flask-tooltip" />
                        <img src={flaskLogo} alt="" />
                    </div>
                    <div className="ts-img-container"
                     data-tooltip-id="java-tooltip" 
                     data-tooltip-content="Java" 
                     data-tooltip-float={true} >
                    <Tooltip id="java-tooltip" />
                        <img src={javaLogo} alt="" />
                    </div>
                    <div className="ts-img-container"
                     data-tooltip-id="cpp-tooltip" 
                     data-tooltip-content="C++" 
                     data-tooltip-float={true} >
                    <Tooltip id="cpp-tooltip" />
                        <img src={cppLogo} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TechStack