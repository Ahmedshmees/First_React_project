import Logo from "../assets/images/logo.png"; 
const Footer = ()=> {
    return (
        <>
        <div data-aos="fade-up" className="footer">
            <div className="col">
            <div className="one">
                <div className="head">
                    <img src={Logo} alt={Logo.alt}/>
                    <h2>Burger King</h2>
                </div>
                <p>The Whopper® Wearhouse is here with cozy winter merch from seasons past. Once these items disappear, they’ll be gone forever—so grab your favorites today!</p>
                <span>123 Street, City, Country</span>
                <span>+123456789</span>
            </div>
            <div className="two">
                <h2>Important Links</h2>
                    <ul>
                       <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Services</a></li>
                       <li><a href="#">Contact</a></li>
                    </ul>
            </div>
            <div className="two">
                <h2>Company Links</h2>
                    <ul>
                       <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Services</a></li>
                       <li><a href="#">Contact</a></li>
                    </ul>
            </div>
            <div className="two">
                <h2>Links</h2>
                    <ul>
                       <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Services</a></li>
                       <li><a href="#">Contact</a></li>
                    </ul>
            </div>
            </div>
            <p>Copyright 2025</p>
        </div>
            </>
    );
}

export default Footer;