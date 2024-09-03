import React from 'react';
import './footer.css';
function Footer() {
  return (
    <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-section1">
                    <h1 className="footer-logo">BLOOD BUDDIES</h1>
                    <p className="footer-description">
                        We are the world's largest and most trustworthy blood donation center. We have been working since 1973 with a prestigious vision to help patients by providing blood. We are working globally, organizing blood donation campaigns to raise awareness for people to donate blood.
                    </p>
                </div>

                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Email: <a href="mailto:support@donation.com">support@donation.com</a></li>
                        <li>Email: <a href="mailto:helpme@donation.com">helpme@donation.com</a></li>
                        <li>Address: Road-2,3/A East Shibgonj, Sylhet-3100, Bangladesh</li>
                        <li>Office: <a href="tel:+880823560433">(+880) 0823 560 433</a></li>
                        <li>Cell: <a href="tel:+880723161343">(+880) 0723 161 343</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Support Links</h2>
                    <ul className='links'>
                        <div className='col-1'>
                        <li><a href="/">Thalassemia</a></li>
                        <li><a href="/">Myelodysasia</a></li>
                        <li><a href="/">Hemolytimia</a></li>
                        <li><a href="/">Hyrcoagulable</a></li>
                        
                        <li><a href="/">Sicklenemiaxs</a></li>
                        </div>
                        <div className='col-2'>
                        <li><a href="/">Cell Elofrosis</a></li>
                        <li><a href="/">Blood Count</a></li>
                        <li><a href="/">Ychromas Eosis</a></li>
                        <li><a href="/">Thrombo Xtosis</a></li>
                        <li><a href="/">Aplastic Anemia</a></li>
                        </div>
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>Subscribe Us</h2>
                    <p>Signup for regular newsletters and stay up to date with our latest news.</p>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Enter Your Email" />
                        <button type="submit">SUBSCRIBE NOW</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright 2018 - Blood Buddies by BlueWindLab. All Rights Reserved.</p>
            </div>
        </footer>
  );
}

export default Footer;
