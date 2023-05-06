import "./education.styles.css"
import eduLogo from "../../assets/graduation.png"

const Education = () => {
    return(
        <div className="education-wrapper">
            <div className="education-outer">
                <h2>Educational Qualification</h2>

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
                <h2>Other Interests</h2>
                <div className="interests-inner">
                    <img src="" alt="" />
                    <h3>Machine Learning & Deep Learning</h3>
                </div>
                <div className="interests-inner">
                    <img src="" alt="" />
                    <h3>Cryptography & Blockchain</h3>
                </div>
                <div className="interests-inner">
                    <img src="" alt="" />
                    <h3>Data Structures and Algorithms</h3>
                </div>
                <div className="interests-inner">
                    <img src="" alt="" />
                    <h3>Devops</h3>
                </div>
            </div>
        </div>
    )
}

export default Education