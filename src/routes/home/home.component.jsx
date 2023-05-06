import LandingPage from "../../components/landing-page/landing-page.component"
import TechStack from "../../components/tech-stack/tech-stack.component"
import Education from "../../components/education/education.component"
import ProjectsPreview from "../../components/projects-preview/projects-preview.component"


const Home = () => {
    return(
        <div>
            <LandingPage/>
            <TechStack/>
            <Education/>
            <ProjectsPreview/>
        </div>
    )
}

export default Home