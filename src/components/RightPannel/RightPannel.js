import React from 'react';
import classes from './RightPannel.module.css';
import { Route, Routes } from 'react-router-dom';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Skills from './Skills/Skills';
import About from './About/About';


const RightPannel = () => {
    return (
        <div className={classes.RighPannel} id="back-to-top-anchor" style={{backgroundColor: '#DECBA4'}}>
            <Routes>
                <Route index path="" element={<About background="#DECBA4"/>} />
                {/* <Route path="education" element={<Education/>} /> */}
                <Route path="projects" element={<Projects background="#DECBA4"/>} />
                <Route path="resume" element={<Resume/>} />
                <Route path="Skills" element={<Skills/>} />
            </Routes>
        </div>
    )
}

export default RightPannel;
