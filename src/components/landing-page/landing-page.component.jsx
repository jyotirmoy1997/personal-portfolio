import "./landing-page.styles.css"
import dp from "../../assets/IMG_3311.jpg"
import linkedinlogo from "../../assets/linkedin_1.png"
import twitterlogo from "../../assets/twitter.png"
import githublogo from "../../assets/github-white.png"

const LandingPage = () => {
    return(
        <div className="landing-page-outer">
            <div className="landing-page-inner">
                <div id="dp-container">
                    <img src={dp} alt="" height={219} width={200} />
                </div>
                <div className="about-heading">
                    <h1>Hi, I am Jyotirmoy Das</h1>
                </div>
                <div className="about">
                    <p>Hi There ! I am Jyotirmoy Das, A Full-Stack developer primarily focued on 
                        The MERN Stack. I create dynamic web applications that deliver exceptional 
                        user experiences. With a focus on performance and functionality, 
                        I turn ideas into reality. Let's build something great!
                    </p>
                </div>
                <div className="social-links">
                    <a className="social-links-icons" href="">
                        <img src={linkedinlogo} alt="" />
                    </a>
                    <a className="social-links-icons" href="">
                        <img src={twitterlogo} alt="" />
                    </a>
                    <a className="social-links-icons" href="">
                        <img src={githublogo} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPage