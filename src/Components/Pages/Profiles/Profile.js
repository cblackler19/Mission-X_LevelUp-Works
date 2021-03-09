import React from 'react';
import './Profiles.css';
import StarLogo from '../../Images/Star Logo -2.png';
import Picture from '../../Images/test.png';
import MaoriLogo from '../../Images/Maori flag.jpg';
import NZLogo from '../../Images/NZ Flag.jpg';
import { Button } from '@material-ui/core';
import Footer from '../Footer/Footer.js';

export default function Profile() {
    return (
        <div className='Student_Profile'>
            <Navigation />
            <div id='Student_Div'>
                <StudentPicture />
                <StudentDetails />
            </div>
            <Footer />
        </div>
    );
}

function Navigation() {
    return (
        <div id='Student_Navigation'>
            <img id='Student_TopNavLogo' src={StarLogo} alt='Logo' />
            <p className='Student_TopNavLabels'>HOME </p>
            <p className='Student_TopNavLabels'>PROJECTS </p>
            <p className='Student_TopNavLabels'>TEACHERS </p>

            <div id='Student_UserInteraction'>
                <div id='Student_LanguageControls'>
                    LANG<img id='Student_MaoriFlag' src={MaoriLogo} alt='Maori Flag'></img><img id='Student_NZFlag' src={NZLogo} alt='NZ Flag'></img>
                </div>
                <div id='Student_Username'><img id='Student_TopNavPicture' src={Picture} alt='Student' />RAWIRI FLETCHER</div>
            </div>
        </div>
    );
}

function StudentPicture() {
    return (
        <div id='Student_PictureParent'>
            <div id='Student_PictureFrame'>
                <img id='Student_Picture' src={Picture} alt='Student' />
                {/*<div className='Button'>EDIT PROFILE</div>
                <div className='Button'>CHANGE PHOTO</div>
                
                    TODO: Replace with Material UI buttons.
                */}
            </div>
        </div>
    );
}

function StudentDetails() {
    return (
        <div id='Student_DetailsParent'>
            <div id='Student_DetailsFrame'>
                <div id='Student_Details'>
                    <h1 id='Student_Name'>Rawiri Fletcher</h1>
                    <div id='Student_InformationLabels'>
                        <p>School</p>
                        <p>Teacher</p>
                        <p>Course</p>
                        <p>Date of Birth</p>
                        <p>Contact No</p>
                        <p>Email Address</p>
                    </div>
                    <div id='Student_Information'>
                        <p id='Student_SchoolName'>Homai School</p>
                        <p id='Student_TeacherName'>Jasmina Salvador</p>
                        <p id='Student_CourseName'>Beginner</p>
                        <p id='Student_DateOfBirth'>25 June 2010</p>
                        <p id='Student_ContactNumber'>022 524 6399</p>
                        <p id='Student_EmailAddress'>fletchy.r@gmail.com</p>
                    </div>
                </div>
                <Button className='Global_Buttons' id='Student_RTPButton'>RETURN TO PROJECTS</Button>
            </div>
        </div>
    );
}