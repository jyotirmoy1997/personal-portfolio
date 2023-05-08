import "./education.styles.css"
import eduLogo from "../../assets/graduation.png"
import mlearning from "../../assets/images.jpg"
import blockchain from "../../assets/blockchain.png"
import dsa from "../../assets/dsa.jpg"
import devops from "../../assets/logo-devops.png"

const Education = () => {
    return(
        <div className="education-wrapper">
            <div className="education-outer">
                <h1>Educational Qualification</h1>

                <div className="education-inner">
                    <img src={eduLogo} alt="" height={40} width={40} />
                    <div className="education-cat">
                        <div>
                            <h2>Master's in Computer Science, 2023</h2>
                            <h4>University of North Bengal</h4>
                        </div>
                    </div>
                </div>

                <div className="education-inner">
                    <img src={eduLogo} alt="" height={40} width={40} />
                    <div className="education-cat">
                        <div>
                            <h2>Bachelor's in Computer Science, 2021</h2>
                            <h4>University of North Bengal</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="interests-wrapper">
                <h1>Other Interests</h1>
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