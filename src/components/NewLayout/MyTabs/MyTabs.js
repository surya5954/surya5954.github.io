import { Tabs, Tab, MenuItem, Typography} from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles'
import { Link } from 'react-router-dom';


const useStyles = makeStyles(()  =>{
    return createStyles({
        root: {
            color: "black",
            display: "block",
        }
    })
})

const pages = [
    {link: '', title: 'Blogs'}, 
    {link: '/projects', title: 'Projects'}, 
    // {link: '/skills', title: 'Skills'},
    // {link: '/about', title: 'About'}
]

const MyTabs = ({mobile}) => {
    const classes = useStyles();

    return (
        <>
        {!mobile && <Tabs className= {classes.root} variant="standard">
            {pages.map((item) =>(
                <Tab label={item.title} key={item.title} component={Link} to={item.link} />
            ))}
            
        </Tabs>
        }

        {
               mobile &&  
               pages.map((page) => (
                <MenuItem key={page.title} component={Link} to={page.link} >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))
            }
        </>
    )
}

export default MyTabs;