import React from 'react'; // Removed useContext as theme string isn't directly used now
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import classModule from './Education.module.css';
import Slide from '@material-ui/core/Slide';
import PaperTransition from '../../Animations/PaperTransition';
import { educationData } from '../../../DataStore/portfolioData';
// ThemeContext import removed as theme string isn't directly used for these styles

const useStyles = makeStyles((muiTheme) => ({ // muiTheme is Material-UI's own theme object
    root: { // This style is applied to the div inside PaperTransition
        maxWidth: 400,
        minHeight: 200,
        backgroundColor: 'var(--card-background-color)', // Use new CSS variable
        color: 'var(--card-text-color)', // Set default text color for the card content
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500], // Remains as is, specific accent
    },
    item: {
        margin: '3%',
        marginLeft: '4%'
    }
}));

const Education = () => {
    const classes = useStyles(); // No need to pass theme as prop if styles use CSS vars
   
    const checked = true;
    return (
        
        <Grid container className={classModule.container}>
            {educationData.map((item) => (
                <Slide key={item.college} direction={item.transition} in={checked} mountOnEnter unmountOnExit>
                    <Grid item xs={10} sm={5} className={classes.item} >
                        {/* PaperTransition color prop now uses CSS variable string */}
                        <PaperTransition color={'var(--card-background-color)'}>
                            <div className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar alt={item.university} src={item.logo} />
                                    }
                                    // Explicitly style title and subheader to use card text color
                                    titleTypographyProps={{ style: { color: 'var(--card-text-color)' } }}
                                    subheaderTypographyProps={{ style: { color: 'var(--card-text-color)' } }}
                                    title={item.course + " (" + item.stream + ")"}
                                    subheader={item.college}
                                />
                                <CardContent>
                                    {/* Typography now uses --card-text-color */}
                                    <Typography variant="body2" style={{ color: 'var(--card-text-color)' }} component="p">
                                        {item.highlights}
                                    </Typography>
                                </CardContent>
                            </div>
                        </PaperTransition>
                    </Grid>
                </Slide>
            ))}
        </Grid>
    )
}

export default Education;
