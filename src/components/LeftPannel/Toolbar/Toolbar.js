import React from 'react';
import classes from './Toolbar.module.css'
import AppBar from './AppBar/AppBar';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <AppBar />
        </header>
    )
}

export default toolbar;