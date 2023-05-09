import "./footer.styles.css"

const Footer = () => {
    const d = new Date()
    return(
        <div className="footer-wrapper">
            <p>&#169; {d.getFullYear()} Jyotirmoy Das, All Rights Reserved</p>
        </div>
    )
}

export default Footer