import React from 'react';
import Projects from '../../../RightPannel/Projects/Projects'

const ProjectComponent = () => {
    // Remove the hardcoded background prop. Projects.js will use ThemeContext.
    return (
        <div>
            <Projects newLayout={true} />
        </div>
    )
}

export default ProjectComponent;