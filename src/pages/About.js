import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../styles';

function About() {
  return (
    <Card>
        <div className='about'>
            <h1>About this Project</h1>
            <p>This is a react app that gives feedback for a product or service.</p>
            <p> Version 1.0.0</p>
            <Link to={"/feedback-app"}>
                Back to Home
            </Link>
        </div>
    </Card>
  )
}

export default About
