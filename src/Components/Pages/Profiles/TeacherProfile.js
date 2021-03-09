import React from 'react';
import { Button } from '@material-ui/core';
import './Profiles.css';
import StarLogo from '../../Images/Star Logo -2.png';
import Picture from '../../Images/test.png';
import MaoriLogo from '../../Images/Maori flag.jpg';
import NZLogo from '../../Images/NZ Flag.jpg';
import Footer from '../Footer/Footer.js';

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
        <div id='Teacher_Navigation'>
            <img id='Teacher_TopNavLogo' src={StarLogo} alt='Logo' />
            <p className='Teacher_TopNavLabels'>HOME </p>
            <p className='Teacher_TopNavLabels'>PROJECTS </p>
            <p className='Teacher_TopNavLabels'>TEACHERS </p>

            <div id='Teacher_UserInteraction'>
                <div id='Teacher_LanguageControls'>
                    LANG<img id='Teacher_MaoriFlag' src={MaoriLogo} alt='Maori Flag'></img><img id='Teacher_NZFlag' src={NZLogo} alt='NZ Flag'></img>
                </div>
                <div id='Teacher_Username'><img id='Teacher_TopNavPicture' src={Picture} alt='Teacher' />JASMINA SALVADOR</div>
            </div>
        </div>
    );
}

function TeacherPicture() {
    return (
        <div id='Teacher_PictureParent'>
            <div id='Teacher_PictureFrame'>
                <img id='Teacher_Picture' src={Picture} alt='Teacher' />
                
                {/*
                
                    TODO: REPLACE HTML BUTTONS WITH
                    MATERIAL UI BUTTONS.

                */}

                <div className='Button'>EDIT PROFILE</div>
                <div className='Button'>CHANGE PHOTO</div>
            </div>
        </div>
    );
}

function TeacherDetails() {
    return (
        <div id='Teacher_DetailsParent'>
            <div id='Teacher_DetailsFrame'>
                <div id='Teacher_Details'>
                    <h1 id='Teacher_Name'>Jasmina Salvador</h1>
                    <div id='Teacher_InformationLabels'>
                        <p>School</p>
                        <p>Courses Purchased</p>
                        <p>Date of Birth</p>
                        <p>Contact No</p>
                        <p>Email Address</p>
                    </div>
                    <div id='Teacher_Information'>
                        <p id='Teacher_SchoolName'>Homai School</p>
                        <p id='Teacher_CourseName'>Beginner</p>
                        <p id='Teacher_DateOfBirth'>25 June 1986</p>
                        <p id='Teacher_ContactNumber'>027 754 2800</p>
                        <p id='Teacher_EmailAddress'>jsalvador@homai.edu</p>
                    </div>
                </div>
                <div id='Teacher_ReturnToProjects'>
                    <Button className='Global_Buttons' id='Teacher_RTPButton'>RETURN TO PROJECTS</Button>
                </div>
                <div id='Teacher_ReturnToDashboard'>
                    <Button className='Global_Buttons' id='Teacher_RTDButton'>RETURN TO DASHBOARD</Button>
                </div>
            </div>
        </div>
    );
}