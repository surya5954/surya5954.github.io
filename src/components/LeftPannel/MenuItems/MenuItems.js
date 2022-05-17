import React, { useState } from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from './MenuItem/MenuItem'

const useStyles = makeStyles({
    menuItems: {
        // padding: 28
    }
});

const MenuItems = () => {
    const menuItemsObj = [
        { name: "Home", link: "", active: true },
        { name: "Projects", link: "projects", active: false },
        // { name: "Education", link: "education", active: false },
        { name: "Skills", link: "skills", active: false },
        { name: "MY CV", link: "resume", active: false },
    ]
    const classes = useStyles();
    const [menuItems, setMenuItem] = useState(menuItemsObj);
    const onHoverHnadler = (event) => {
        let newMenu = [...menuItems];
        for (let i in newMenu) {
            if (event.target.innerHTML == newMenu[i].name) {
                newMenu[i].active = true;
            } else {
                newMenu[i].active = false;
            }
        }
        setMenuItem(newMenu);
    }



    return (

        <List className={classes.menuItems}>
            {menuItems.map((item, _) => (
                <MenuItem key={_} name={item.name} link={item.link} active={item.active} onHover={onHoverHnadler}/>
            ))}
        </List>

    )
}

export default MenuItems;