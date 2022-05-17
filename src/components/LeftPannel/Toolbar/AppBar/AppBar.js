import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import profilePic from '../../../../assets/images/profilePic.jpg';
import MenuItems from '../../MenuItems/MenuItems';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#3E5151'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        backgroundColor: '#3E5151'
    },
    title: {
        flexGrow: 1,
    },
    AppBar: {
        backgroundColor: '#3E5151',
        color: '#DECBA4'
    }

}));

const userData = {
    name: "Surya Prakash Pandey"
}

export default function MenuAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.AppBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {userData.name}
                    </Typography>
                    {(
                        <div>
                            <Avatar alt="Surya Prakash Pandey" src={profilePic} />
                            <Menu
                                id="menu-appbar"

                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClick={handleClose}
                            >
                                <MenuItems />
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
