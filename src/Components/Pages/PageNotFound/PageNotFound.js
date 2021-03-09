import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return(
        <div id='PageNotFound'>
            <h1>404</h1>
            <p id='Message'>How did we get here?</p>
            <p id='Error'>(error 404: broken link or page doesn't exist)</p>

            <div id='ReturnButton'><Link to='/profile' style={{ textDecoration: 'none', color: 'white'}}>Return Home</Link></div>
        </div>
    );
}

export default PageNotFound;