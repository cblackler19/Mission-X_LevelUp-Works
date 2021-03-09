import React from 'react';
import { Button } from '@material-ui/core';
import './Profiles.css';
import StarLogo from '../../Images/Star Logo -2.png';
import Picture from '../../Images/test.png';
import MaoriLogo from '../../Images/Maori flag.jpg';
import NZLogo from '../../Images/NZ Flag.jpg';

export default function TeacherProfile() {
    return (
        <div className='TeacherProfile'>
            <Navigation />
            <div id='TeacherDiv'>
                <TeacherPicture />
                <TeacherDetails />
            </div>
            <Footer />
        </div>
    );
}

function Navigation() {
    return (
        <div id='Navigation'>
            <img id='TopNavLogo' src={StarLogo} alt='Logo' />
            <p className='TopNavLabels'>HOME </p>
            <p className='TopNavLabels'>PROJECTS </p>
            <p className='TopNavLabels'>TEACHERS </p>

            <div id='UserInteraction'>
                <div id='LanguageControls'>
                    LANG<img id='MaoriFlag' src={MaoriLogo} alt='Maori Flag'></img><img id='NZFlag' src={NZLogo} alt='NZ Flag'></img>
                </div>
                <div id='TeacherUsername'><img id='TopNavTeacherPicture' src={Picture} alt='Teacher' />JASMINA SALVADOR</div>
            </div>
        </div>
    );
}

function TeacherPicture() {
    return (
        <div id='TeacherPicture'>
            <div id='PictureFrame'>
                <img id='Picture' src={Picture} alt='Teacher' />
                <div className='Button'>EDIT PROFILE</div>
                <div className='Button'>CHANGE PHOTO</div>
            </div>
        </div>
    );
}

function TeacherDetails() {
    return (
        <div id='TeacherDetails'>
            <div id='DetailsFrame'>
                <div id='Details'>
                    <h1 id='TeacherName'>Jasmina Salvador</h1>
                    <div id='InformationLabels'>
                        <p>School</p>
                        <p>Courses Purchased</p>
                        <p>Date of Birth</p>
                        <p>Contact No</p>
                        <p>Email Address</p>
                    </div>
                    <div id='Information'>
                        <p id='SchoolName'>Homai School</p>
                        <p id='CourseName'>Beginner</p>
                        <p id='DateOfBirth'>25 June 1986</p>
                        <p id='ContactNumber'>027 754 2800</p>
                        <p id='EmailAddress'>jsalvador@homai.edu</p>
                    </div>
                </div>
                <div id='ReturnToProjects'>
                    <Button>RETURN TO PROJECTS</Button>
                </div>
                <div id='ReturnToDashboard'>
                    <Button>RETURN TO DASHBOARD</Button>
                </div>
            </div>
        </div>
    );
}

function Footer() {
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