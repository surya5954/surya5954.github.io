import React from 'react';
import KeycloakAuthFlow from '../../../assets/authFlow/KeycloakAuthFlow.gif';
import Paper from '@material-ui/core/Paper';
import AzureAuthFlow from '../../../assets/authFlow/AzureAuthFlow.gif';
import FacebookAuthFlow from '../../../assets/authFlow/FacebookAuthFlow.gif';
import GoogleAuthFlow from '../../../assets/authFlow/GoogleAuthFlow.gif';
import MyCarousel from '../../UI/Carousel/MyCarousel';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classes from './HobbyProjects.module.css'

const hobbyProject = [
    {
        name: "Securing your React SPA with Social Identity Providers like Microsoft, Google, Facebook etc.",
        gitHubLink: "https://github.com/surya5954/loginas.git"

    },
    {
        name: "Securing your React SPA with Keycloak (Use it as Identity or Service Provider)",
        gitHubLink: "https://github.com/surya5954/loginas.git"
    }
]

const carouselData = [
    {
        image: AzureAuthFlow,
        caption: "Azure Authorization Code flow with PCKE using React SPA"
    }, {
        image: FacebookAuthFlow,
        caption: "Facebook Authorization Code flow with PCKE using React SPA"
    }, {
        image: GoogleAuthFlow,
        caption: "Google Authorization Code flow with PCKE using React SPA"
    }
]

const HobbyProjects = () => {
    return (
        <div>
            <Grid container className={classes.GitProjectTab}>
                <Grid item xs={10} sm={5}>
                    <div style={{ marginTop: '-30px' }}>
                        <Typography variant="h6" component="h4">
                            <h4></h4>
                        </Typography>
                        <Typography variant="body2" component="p">
                            <b>Loginas: </b>
                            Open Source Project, <a className={classes.postList} href="https://github.com/surya5954/loginas.git">click here </a>
                             to view the Source code. Here are the commands to do local setup,
                        </Typography>

                        <Paper className={classes.codeSnippet}>
                            <Typography variant="body2" component="p">
                                git clone https://github.com/surya5954/loginas.git<br></br>
                                cd loginas <br></br>
                                npm install<br></br>
                                npm start<br></br>
                            </Typography>
                        </Paper>
                    </div>

                </Grid>
                <Grid item xs={10} sm={5}>
                    <MyCarousel carouselData={carouselData} />
                </Grid>
            </Grid>
            <Grid container className={classes.GitProjectTab}>
                <Grid item xs={10} sm={5}>
                    {/* <Carousel > */}
                    <div>
                        <img src={KeycloakAuthFlow} style={{ width: '100%' }} />
                        {/* <p className="legend">Keycloak Authorization Code flow with PCKE using React SPA</p> */}
                    </div>
                    {/* </Carousel> */}

                </Grid>
                <Grid item xs={10} sm={5}>
                    <div style={{ marginTop: '-30px' }}>
                        <Typography variant="h6" component="h4">
                            <h4></h4>
                        </Typography>
                        <Typography variant="body2" component="p">
                            <b>Loginas: </b>
                            Open Source Project, <a className={classes.postList} href="https://github.com/surya5954/loginas.git">click here </a>
                             to view the Source code. Here are the commands to do local setup,
                        </Typography>

                        <Paper className={classes.codeSnippet}>
                            <Typography variant="body2" component="p">
                                git clone https://github.com/surya5954/loginas.git<br></br>
                                cd loginas <br></br>
                                npm install<br></br>
                                npm start<br></br>
                            </Typography>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}


export default HobbyProjects;