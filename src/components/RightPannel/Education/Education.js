import React, { useContext } from 'react'; // Import useContext
import Card from '@material-ui/core/Card';
// CardMedia import removed as it's unused
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
import { ThemeContext } from '../../../contexts/ThemeContext'; // Import our ThemeContext

const useStyles = makeStyles((muiTheme) => ({ // muiTheme is Material-UI's own theme object
    root: (props) => ({ // Function to accept props, where we'll pass our theme string
        maxWidth: 400,
        minHeight: 200,
        // Use our theme string from props to conditionally set background
        backgroundColor: props.theme === 'light' ? '#DECBA4' : '#282c34', 
    }),
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
    const { theme } = useContext(ThemeContext); // Get our theme ('light' or 'dark')
    const classes = useStyles({ theme }); // Pass our theme string as a prop to useStyles
   
    const checked = true;
    return (
        
        <Grid container className={classModule.container}>
            {educationData.map((item) => (
                <Slide key={item.college} direction={item.transition} in={checked} mountOnEnter unmountOnExit>
                    <Grid item xs={10} sm={5} className={classes.item} >
                        {/* Conditionally set color prop for PaperTransition */}
                        <PaperTransition color={theme === 'light' ? '#DECBA4' : '#282c34'}>
                            <div className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar alt={item.university} src={item.logo} />
                                    }
                                    title={item.course + " (" + item.stream + ")"}
                                    subheader={item.college}

                                />
                                <CardContent>
                                    {/* Use style prop to apply CSS variable for text color */}
                                    <Typography variant="body2" style={{ color: 'var(--text-color)' }} component="p">
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
