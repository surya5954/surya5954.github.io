import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Tooltip, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState, useEffect } from 'react';
import profilePic from '../../../assets/images/profilePic.jpg';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import MyTabs from '../MyTabs/MyTabs'

const settings = ['About', 'Contact', 'Download Resume'];
const useStyles = makeStyles(() =>{
    return createStyles({
        root:{
            backgroundColor: "#EBF5FB",
            opacity: 1,
            width: '80%',
            position: 'relative',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
        sticky: {
            position: 'fixed',
            top: 30,
            width: '100%',
            padding: 0,
            margin: 0,
            opacity: 0.8,
            transition: 'top 2s',
        }
    })
})

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const classes = useStyles();
 
  useEffect(() => {
      
    const appbar = document.getElementById('appbar');
    const sticky = appbar.offsetTop;

    const scrollCallBack = window.addEventListener("scroll", () =>{
        if(window.pageYOffset > sticky){
          appbar.classList.add(classes.sticky);
        }else{
            appbar.classList.remove(classes.sticky);
        }
        
    })
      return () => {
          window.removeEventListener("scroll", scrollCallBack);
      }
  }, [])

  


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar id="appbar" position="static" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MyTabs mobile={true}/>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MyTabs mobile={false}/>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profilePic} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
