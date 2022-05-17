import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import {
    createTheme,
    ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';

const customTheme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
    },
});

// background-color: ${theme.palette.primary.main};
// background-color: ${theme.palette.secondary.main};

// We are explicity doing this for Paper component on Material UI 
// We can also optimize to use for any component passed by writing a Higher Order Component 


// This Component is to add Animation paper on which Chart will be drawn 
// We can use this for any other component as well.

function PaperTransition(props) {

    const Styledvatar = styled(Paper)`
        ${({ theme }) => `
        padding: 15px;
        background-color: ${props.color};
        transition: ${theme.transitions.create(['background-color', 'transform'], {
            duration: theme.transitions.duration.standard,
        }
    )};
        &:hover {
            background-color: ${props.hoverColor ? props.hoverColor : props.color};
            box-shadow: 0 8px 6px -6px black;;
            transform: scale(1.03);
        }
        `}
        `;

    return (
        <NoSsr>
            <MuiThemeProvider theme={customTheme}>
                <ThemeProvider theme={customTheme}>
                    <Styledvatar>{props.children}</Styledvatar>
                </ThemeProvider>
            </MuiThemeProvider>
        </NoSsr>
    );
}


export default PaperTransition;