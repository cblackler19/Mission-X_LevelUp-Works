import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className='Footer'>
            <div id='FooterDetails'>
                <div id='CompanySection'>
                    <h2>COMPANY</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Partners</p>
                </div>
                <div id='CourseSection'>
                    <h2>COURSES</h2>
                    <p>Register</p>
                    <p>Login</p>
                    <p>Projects</p>
                    <p>Teachers</p>
                    <p>Parents</p>
                    <p>Resources</p>
                </div>
                <div id='SupportSection'>
                    <h2>SUPPORT</h2>
                    <p>FAQs</p>
                    <p>Helpdesk</p>
                    <p>Contact Us</p>
                </div>
                <div id='LegalSection'>
                    <h2>LEGAL</h2>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div id='AboutSection'>
                    <h2>LevelUp Works</h2>
                    <p>
                        LevelUp Works is an Auckland-based enterprise<br />
                        dedicated to developing game-based learning<br />
                        software to help teachers in response to the<br />
                        New Zealand Digital Technologies & Hangarau<br />
                        Matihiko.<br />
                        alan@levelupworks.com<br />
                        (021) 668 185
                    </p>
                </div>
            </div>
        </div>
    );
}