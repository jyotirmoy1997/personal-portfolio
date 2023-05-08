import CertificateCard from "../../components/certificate-card/certificate-card.component"
import bdata from "../../assets/bdata.jpg"
import mlearning from "../../assets/mlearning.jpg"
import "./certifications.styles.css"

const details = [
    {
        id : 1,
        heading : "Big Data Computing",
        image : bdata,
        issuer : "NPTEL through IIT Patna",
        issueDate : "November 2022",
        credentialID : "NPTEL22CS65S43280127"
    },
    {
        id : 2,
        heading : "Introduction to Machine Learning",
        image : mlearning,
        issuer : "NPTEL through IIT Kharagpur",
        issueDate : "October 2022",
        credentialID : "NPTEL22CS97S13380043"
    }
]

const Certifications = () => {
    return(
        <div className="certifications-wrapper">
            <div className="certifications-inner">
                {
                    details.map(ct => <CertificateCard key={ct.id} details={ct} />) 
                }
            </div>
        </div>
    )
}

export default Certifications