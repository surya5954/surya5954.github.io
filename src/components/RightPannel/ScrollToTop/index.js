import React, { useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import { useWindowScroll } from 'react-use'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1
    },
}));

const ScrollToTop = () => {
    const classes = useStyles();
    const { x, y: pageYOffset } = useWindowScroll();
    console.log(x, pageYOffset);
    const [visible, setVisibility] = useState(true);
    console.log(pageYOffset);
    useEffect(() => {
        console.log(pageYOffset);
        if (pageYOffset > 400) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }, [pageYOffset])

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', top: 0 });
        }
    };

    return (
        <Zoom in={true}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    )
}

export default ScrollToTop
