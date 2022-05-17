import React from 'react'
import classes from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MenuItem = (props) => {

    return (

        <NavLink exact to={props.link} activeClassName={classes.active} className={classes.NavigationsItem} scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
            <ListItem alignItems="center" button key={props.name} onMouseDown={props.onHover}>
                <ListItemText primary={props.name} />
            </ListItem>
        </NavLink >
    )
}

export default MenuItem;
