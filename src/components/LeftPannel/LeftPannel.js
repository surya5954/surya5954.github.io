import React from 'react';
import './LeftPannel.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import profilePic from '../../assets/images/profilePic.jpg';
import Divider from '@material-ui/core/Divider';
import MenuItems from './MenuItems/MenuItems';
import SocialMedia from './SocialMedia/SocialMedia';
import Toolbar from './Toolbar/Toolbar';



const useStyles = makeStyles({
    root: {

        height: '100%',
        backgroundColor: '#3E5151',
    },
    content: {
        textAlign: 'center',
        padding: "10px"
    },
    menuItems: {
        display: 'block',
        float: 'left',
        minWidth: 200,
        color: '#2D1F1F'
    }
});

const userData = {
    name: "Surya Prakash Pandey",
    role: "Full Stack Developer"
}
const LeftPannel = () => {
    const classes = useStyles();


    return (
        <div>
            <Toolbar />
            <div className="SideDrawer">
                <Card className={classes.root}>
                    <CardMedia
                        className="media"
                        image={profilePic}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {userData.name}
                        </Typography>
                        <Typography variant="h6" component="h5" color="#E39E9C">
                            {userData.role}
                        </Typography>
                        <SocialMedia />
                    </CardContent>
                    <hr />
                    <CardActions>
                        <Divider />
                        <MenuItems />
                        <Divider />
                    </CardActions>
                </Card>
            </div>
        </div>

    )
}

export default LeftPannel;
