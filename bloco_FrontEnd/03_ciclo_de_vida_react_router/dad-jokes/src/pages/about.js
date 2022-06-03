import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function About() {
    const location = useLocation();
    const history = useHistory();
    function goBack() {
        history.goBack();
    }
    
    return (
        <div>
            <h1>About us</h1>
            <h1>Path: {location.pathname}</h1>
            <button onClick={goBack}>Back</button>
        </div>
    );
}

export default About;
