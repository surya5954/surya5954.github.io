import classes from './About.module.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SocialMedia from '../../LeftPannel/SocialMedia/SocialMedia';
import HobbyProjects from '../HobbyProjects/HobbyProjects';
import { Avatar, Box, Button } from '@material-ui/core';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {useMediumPostData } from '../../../apis/medium.service';
import PaperTransition from '../../Animations/PaperTransition';
import {greetings, data} from '../../../DataStore/portfolioData';
import Stack from '@mui/material/Stack';





const About = (props) => {
    const { data: mediumData, isLoading, status }  = useMediumPostData('mediumData');
  
    if(isLoading) return <h1>{status}...</h1>
    // console.log(mediumData);
    const openMediumPage = (post) => {
        console.log(post);
        window.open(post.link, "mywindow");
    }

    return (
        <div>
            <div className={classes.centerDiv} >
                { !props.newLayout && <div>
                    <Typography variant="h6" component="h2" style={{ textAlign: "center" }}>
                    <h2> {data.greeting + " " + greetings}</h2>
                    </Typography>
                    <hr></hr>
                    <div className={classes.aboutBody}>
                        <Typography variant="h6" component="h2">
                            <h4>{data.userData.about}</h4>
                        </Typography>
                        <Typography variant="h6" component="h2">
                            <h4>Here are some of my blogs posted on Medium,</h4>
                        </Typography>
                    </div>
                </div>}
                <Grid container className={classes.container}>
                    <Grid item xs={10}>
                        <ul>
                            {mediumData && mediumData.items.map((post) => (

                                <p key={post.pubDate} className={classes.post}>
                                    <PaperTransition color={props.background}>
                                        <Grid container className={classes.mediumContent}>
                                            <Grid item  onClick={() => openMediumPage(post)} style={{ cursor: "pointer" }}>
                                                <Avatar style={{ width: 200, height: 100, borderRadius: "5%" }} variant="square" alt="HCL Connections" src={post.thumbnail} />
                                            </Grid>
                                            <Grid item >
                                                
                                                        <Typography variant="h6" className={classes.postList} gutterBottom>
                                                            {post.title}
                                                        </Typography>
                                                   
                                                    <Typography className={classes.postList} style={{ float: 'left' }} variant="subtitle1" gutterBottom>
                                                    Published On:  {new window.Date(post.pubDate).toDateString()}
                                                </Typography>

                                                <Typography className={classes.postList} style={{ float: 'right' }} variant="subtitle1" gutterBottom>
                                                    <TwitterShareButton
                                                        url={post.link}
                                                        title={"Here, I have found a great post on, " + post.title}
                                                        via={"surya5954.github.io"}
                                                        className="Demo__some-network__share-button">
                                                        <TwitterIcon
                                                            size={24}
                                                            style={{ fill: "#1DA1F2" }}
                                                            round />
                                                    </TwitterShareButton>
                                                    <LinkedinShareButton
                                                        url={post.link}
                                                        title={"Here, I have found a great post on, " + post.title}
                                                        source={"surya5954.github.io"}
                                                        className="Demo__some-network__share-button">
                                                        <LinkedInIcon
                                                            size={24}
                                                            style={{ fill: "#2867b2" }}
                                                            round
                                                        />
                                                    </LinkedinShareButton>
                                                    <FacebookShareButton
                                                        url={post.link}
                                                        title={"Here, I have found a great post on, " + post.title}
                                                        hashtag={"surya5954.github.io"}
                                                        className="Demo__some-network__share-button">
                                                        <FacebookIcon
                                                            size={24}
                                                            style={{ fill: "#4267B2" }}
                                                            round
                                                        />
                                                    </FacebookShareButton>
                                                </Typography>
                                                    

                                            </Grid>
                                        </Grid>
                                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
                                            <Stack direction="row" spacing={1} justifyContent="flex-end">
                                                        {post.categories.map((item) =>(
                                                            <Button style={{whiteSpace:'nowrap'}} size="small" variant="contained" color="secondary">{item}</Button>
                                                        ))}
                                            </Stack>
                                        </Box>
                                    </PaperTransition>
                                    {/* <img style={{ width: 200, height: 200 }} src={post.thumbnail} /> */}
                                </p>

                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.mobileSocialMedia}>
                <hr></hr>
                <div className={classes.SocialMediaDiv}>
                    <SocialMedia />
                </div>

            </div>
        </div>
    )
}

export default About;
