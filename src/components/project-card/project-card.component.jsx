import "./project-card.styles.css"
import { nanoid } from 'nanoid'
import githubLogo from "../../assets/github-white.png"

const ProjectCard = ({details}) => {
    const {liveLink, gitHubLink, image, desc, heading, ts} = details
    console.log(liveLink)
    return(
            <div className="projects-card">
                <a className="projects-card-img-container" 
                    href={liveLink} 
                    target="_blank">
                    <img src={image} alt="" />
                </a>
                <h3>
                    <span>{heading}</span>
                    <a href={gitHubLink} target="_blank"><img src={githubLogo} alt="" height={30} width={30} /></a>
                    
                </h3>
                <h5>Tech Stack Used</h5>
                <div className="projects-ts-container">
                    {
                        ts.map(it => <img key={nanoid()} src={it} />)
                    }
                </div>
            </div>
    )
}

export default ProjectCard