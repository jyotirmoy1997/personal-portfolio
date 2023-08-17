import CertificateCard from "../../components/certificate-card/certificate-card.component"
import bdata from "../../assets/certificates/bdata.jpg"
import mlearning from "../../assets/certificates/mlearning.jpg"
import bchain from "../../assets/certificates/bchain.jpg"

import Footer from "../../components/footer/footer.component"

import "./certifications.styles.css"

const details = [
    {
        id : 1,
        heading : "Blockchain and it's Applications",
        image : bchain,
        issuer : "NPTEL through IIT Kharagpur",
        issueDate : "May 2023",
        credentialID : "NPTEL23CS47S44640152"
    },
    {
        id : 2,
        heading : "Big Data Computing",
        image : bdata,
        issuer : "NPTEL through IIT Patna",
        issueDate : "November 2022",
        credentialID : "NPTEL22CS65S43280127"
    },
    {
        id : 3,
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
            <Footer />
        </div>
    )
}

export default Certifications