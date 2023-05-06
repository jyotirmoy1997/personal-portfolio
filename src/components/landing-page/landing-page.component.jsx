import "./landing-page.styles.css"
import dp from "../../assets/IMG_3311.jpg"

const LandingPage = () => {
    return(
        <div className="landing-page-outer">
            <div className="landing-page-inner">
                <div id="dp-container">
                    <img src={dp} alt="" height={219} width={200} />
                </div>
                <div>
                    <h1>Hi, I am Jyotirmoy Das</h1>
                </div>
                <div>
                    <p>Hi There ! I am Jyotirmoy Das, A Full-Stack developer primarily focued on 
                        The MERN Stack. I create dynamic web applications that deliver exceptional 
                        user experiences. With a focus on performance and functionality, 
                        I turn ideas into reality. Let's build something great!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage