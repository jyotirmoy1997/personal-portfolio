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


const TechStack = () => {
    return(
        <div className="tech-stack-outer">
            <h1>Tech Stack</h1>
            <div className="tech-stack-inner">
                <div className="tech-stack-container">
                    <div className="ts-img-container">
                        <img src={reactLogo} alt="" />
                    </div>
                    <div className="ts-img-container">
                        <img src={expressLogo} alt="" />
                    </div>
                    <div className="ts-img-container">
                        <img src={nodeLogo} alt="" />
                    </div>
                    <div className="ts-img-container">
                        <img src={mongodbLogo} alt="" />
                    </div>
                </div>
                <div className="tech-stack-container">
                    <div className="ts-img-container">
                        <img src={reduxLogo} alt="" />
                    </div>
                    <div className="ts-img-container">
                        <img src={htmlLogo} alt="" />
                    </div>
                    <div className="ts-img-container">
                        <img src={cssLogo} alt="" />
                    </div>
                    <div className="ts-img-container">
                        <img src={jsLogo} alt="" />
                    </div>
                    
                </div>
                <div className="tech-stack-container">
                    <div className="ts-img-container">
                        <img src={pythonLogo} alt="" />
                    </div>
                    <div className="ts-img-container">
                        <img src={flaskLogo} alt="" />
                    </div>
                    <div className="ts-img-container">
                        <img src={javaLogo} alt="" />
                    </div>
                    <div className="ts-img-container">
                        <img src={cppLogo} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TechStack