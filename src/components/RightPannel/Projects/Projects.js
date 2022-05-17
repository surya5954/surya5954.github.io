import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Slide from '@material-ui/core/Slide';
import ProjectCard from './ProjectCard/ProjectCard';
import moduleClasses from './Project.module.css';
import PaperTransition from '../../Animations/PaperTransition'
import {projectDetails} from '../../../DataStore/portfolioData'
import HobbyProjects from '../HobbyProjects/HobbyProjects';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    paper: {
        padding: '16px 16px',
        backgroundColor: '#3E5151',
        textAlign: 'left'
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    projectHeader: {
        backgroundColor: '#DECBA4',
        padding: 7,
        borderRadius: 5,

    },
    projectBody: {
        backgroundColor: '#DECBA4',
        padding: 7,
        borderRadius: 5,
        marginTop: 5
    },
    techno: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    openSource: {
        margin: theme.spacing(10)
    }
}));

const Projects = ({newLayout, background}) => {
    const classes = useStyles();
    
    const checked = true;

    return (
        <div>
           
                <Timeline align="alternate" className={classes.root}>
                    {projectDetails.map((project) => (
                        <TimelineItem >
                            <TimelineOppositeContent>
                                <Slide direction='right' in={checked} mountOnEnter unmountOnExit>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.duration}
                                        <br></br>
                                        <Typography variant="h6" component="h4">
                                            <b>{project.comapny_name}</b>
                                        </Typography>
                                        {!newLayout && <div style={{ textAlign: "left", margin: '5%' }}>
                                            <PaperTransition color={background}>
                                                <div>
                                                    <Typography ><b>Highlights: </b></Typography>
                                                    <Typography ><ul>
                                                        {project.highlights.map(resp => (
                                                            <li>{resp}</li>
                                                        ))}
                                                    </ul></Typography>
                                                </div>

                                            </PaperTransition>
                                        </div>}

                                        <br></br>
                                    </Typography>

                                </Slide>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <Avatar alt="HCL Connections" src={project.logo} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Slide direction={project.transition} in={checked} mountOnEnter unmountOnExit>
                                    <div>

                                    
                                    {!newLayout && <Paper elevation={3} className={classes.paper}>
                                        <div style={{ margin: 10 }}>
                                            <PaperTransition elevation={3} color={background} className={classes.projectHeader}>
                                                <Typography variant="h6" component="h1" style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.hcltechsw.com/products/connections", "_blank")}>
                                                    <b>{project.name}</b>
                                                </Typography>
                                                <Typography>{project.role}</Typography>
                                            </PaperTransition>
                                        </div>
                                        <div style={{ margin: 10 }}>


                                            <PaperTransition color={background}elevation={3} className={classes.projectBody}>
                                                <Typography>{project.discription}</Typography>
                                                <br></br>
                                                <Typography><b>Responsibilities: </b></Typography>

                                                {/* <br></br> */}
                                                <Typography><ul>
                                                    {project.responsibilities.map(resp => (
                                                        <li>{resp}</li>
                                                    ))}
                                                </ul></Typography>
                                                <br></br>
                                                <Typography><b>Technologies Used: </b></Typography>
                                                <div className={classes.techno}>
                                                    {project.technology.map((logo) => (
                                                        <Avatar alt="HCL Connections" src={logo} />
                                                    ))}

                                                </div>
                                            </PaperTransition>
                                        </div>
                                    </Paper>
                                    }
                                    {
                                        newLayout && <ProjectCard project={project} newLayout={newLayout} background={background}/>
                                    }
                                    </div>
                                </Slide>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline >
            
            {/* {!newLayout && <div className={moduleClasses.mobileProjectCard}>
                <ProjectCard projectDetails={projectDetails} />
            </div>} */}
            <div className={classes.openSource}>
                <Typography variant="h4"><b>Open Source Contribution:</b> </Typography>                                       
            </div>
            <div>
                <HobbyProjects/>
            </div>

        </div>

    );
}

export default Projects;