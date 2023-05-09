import "./education.styles.css"
import eduLogo from "../../assets/graduation.png"
import mlearning from "../../assets/images.jpg"
import blockchain from "../../assets/blockchain.png"
import dsa from "../../assets/dsa.jpg"
import devops from "../../assets/logo-devops.png"
import eduIcon from "../../assets/edu-icon.png"
import interestsIcon from "../../assets/interests.png"

const Education = () => {
    return(
        <div className="education-wrapper">
            <div className="education-outer">
                <h1> <span>
                        <img src={eduIcon} alt="" height={40} width={40} />
                    </span> <span>Educational Qualification</span> </h1>

                <div className="education-inner">
                    <img src={eduLogo} alt="" height={40} width={40} />
                    <div className="education-cat">
                        <h2>Master's in Computer Science</h2>
                        <div className="edu-year">2021 - 2023</div>
                        <a href="https://www.nbu.ac.in/" target="_blank">
                            <h4>University of North Bengal</h4>
                        </a>
                        
                    </div>
                </div>

                <div className="education-inner">
                    <img src={eduLogo} alt="" height={40} width={40} />
                    <div className="education-cat">
                        <h2>Bachelor's in Computer Science</h2>
                        <div className="edu-year">2018 - 2021</div>
                        <a href="https://www.nbu.ac.in/" target="_blank">
                            <h4>University of North Bengal</h4>
                        </a>
                    </div>
                </div>
            </div>
            <div className="interests-wrapper">
                <h1><span>
                        <img src={interestsIcon} alt="" height={45} width={45} />
                    </span> <span>Other Interests</span> 
                </h1>
                <div className="interests-inner">
                    <img src={mlearning} alt="" />
                    <h3>Machine Learning & Deep Learning</h3>
                </div>
                <div className="interests-inner">
                    <img src={blockchain} alt="" />
                    <h3>Cryptography & Blockchain</h3>
                </div>
                <div className="interests-inner">
                    <img src={dsa} alt="" />
                    <h3>Data Structures and Algorithms</h3>
                </div>
                <div className="interests-inner">
                    <img src={devops} alt="" />
                    <h3>Devops</h3>
                </div>
            </div>
        </div>
    )
}

export default Education