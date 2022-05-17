import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
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
import { educationData } from '../../../DataStore/portfolioData'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        minHeight: 200,
        backgroundColor: '#DECBA4'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    item: {
        margin: '3%',
        marginLeft: '4%'
    }
}));

const Education = () => {
    const classes = useStyles();
   
    const checked = true;
    return (
        
        <Grid container className={classModule.container}>
            {educationData.map((item) => (
                <Slide direction={item.transition} in={checked} mountOnEnter unmountOnExit>
                    <Grid item xs={10} sm={5} className={classes.item} >
                        <PaperTransition color="#DECBA4">
                            <div className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar alt={item.university} src={item.logo} />
                                    }
                                    title={item.course + " (" + item.stream + ")"}
                                    subheader={item.college}

                                />
                                <CardContent>
                                    <Typography variant="body2" color="#3E5151" component="p">
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
