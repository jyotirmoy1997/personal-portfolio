import "./certificate-card.styles.css"

const CertificateCard = ({details}) => {
    const {heading, image, issuer, issueDate, credentialID} = details
    return(
        <div className="certificate-card-wrapper">
            <div className="certificate-card-img-container">
                <img src={image} alt="" />
            </div>
            <div className="certificate-card-det">
                <h2>{heading}</h2>
                <h4>Issued By : {issuer}</h4>
                <h4>Issue Date : {issueDate}</h4>
                <h4>Credential ID : {credentialID}</h4>
            </div>
        </div>
    )
}

export default CertificateCard