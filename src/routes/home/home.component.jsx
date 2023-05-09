import LandingPage from "../../components/landing-page/landing-page.component"
import TechStack from "../../components/tech-stack/tech-stack.component"
import Education from "../../components/education/education.component"
import ProjectsPreview from "../../components/projects-preview/projects-preview.component"
import Footer from "../../components/footer/footer.component"

import { Fade } from "react-awesome-reveal";


const Home = () => {
    return(
        <div>
            <LandingPage/>
            <TechStack/>
            <Fade duration={1500}>
                <Education/>
            </Fade>
            <Fade duration={1500}>
                <ProjectsPreview/>
            </Fade>
            
            <Footer />
        </div>
    )
}

export default Home