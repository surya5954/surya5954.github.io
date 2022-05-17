import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
        // margin: '0 auto',
        // marginTop: 15,
        // backgroundColor: '#DECBA4',
        // color: '#DECBA4'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    header: {
        backgroundColor: '#EBF5FB',
        // color: '#DECBA4'
    },
    techno: {
        display: 'flex',
        // justifyContent: '',
        margin: 5,
        flexFlow: 'row wrap'

    },
    techDiv: {
        marginTop: 10,
        marginBottom: -50,
        textAlign: 'left'
    }
}));

export default function ProjectCard({project, newLayout, background}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <div>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar alt="HCL Connections" src={project.logo} />
                        }
                        action={
                            <IconButton aria-label="add to favorites" onClick={() => window.open(project.link, "_blank")}>
                                <LinkIcon />
                            </IconButton>
                        }
                        title={project.name}
                        subheader={project.duration}
                        className={classes.header}
                    />

                    <CardContent style={{textAlign: 'left'}}>
                        <Typography variant="body2" color="#3E5151" component="p">
                            {project.discription}
                            <div className={classes.techDiv}>
                                <Typography><b>Technologies Used: </b></Typography>
                                <div className={classes.techno}>
                                    {project.technology.map((logo) => (
                                        <Avatar alt="HCL Connections" src={logo} />
                                    ))}

                                </div>
                            </div>

                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent style={{textAlign: 'left'}}>
                            <Typography ><b>Highlights: </b></Typography>
                            <Typography><ul>
                                {project.highlights.map(resp => (
                                    <li>{resp}</li>
                                ))}
                            </ul>
                            </Typography>
                            <Typography ><b>Responsibilities: </b></Typography>

                            {/* <br></br> */}
                            <Typography ><ul>
                                {project.responsibilities.map(resp => (
                                    <li>{resp}</li>
                                ))}
                            </ul></Typography>

                        </CardContent>
                    </Collapse>
                </Card>
    
        </div>
    )

}
