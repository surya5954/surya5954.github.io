import { createStyles, makeStyles} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import { Header } from './Header/Header';
import Navigation from './Navigation/Navigation';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router-dom';
import BlogComponent from './Contents/BlogComponent/BlogComponent'
import ProjectComponent from './Contents/ProjectComponent/ProjectComponent';
import SkillsComponent from './Contents/SkillsComponent/SkillsComponent';
import AboutComponent from './Contents/AboutComponent/AboutComponent';

const theme = createTheme({
    typography:{
        fontFamily: 'Raleway',
    }
})

const useStyles = makeStyles(({breakpoints, spacing}) =>
  createStyles({
        root: {
            fontFamily: 'acme',
            flexFlow: "column",
            
        },
        content: {
            [breakpoints.up('lg')]:{
                maxWidth: '80%',
                marginLeft: spacing(20),
                padding: spacing(10)
            }
        }

    })
)

const Layout = () => {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <Grid container className={classes.root}>
            <Grid item>
                <Header/>
            </Grid>
            <Grid item>
                <Navigation/>
            </Grid>
            <Grid item className={classes.content}>
                <Routes>
                    <Route path="/" element={<BlogComponent/>} />
                    <Route path="/projects" element={<ProjectComponent/>} />
                    {/* <Route path="/skills" element={<SkillsComponent/>} /> */}
                    {/* <Route path="/about" element={<AboutComponent/>} /> */}
                </Routes>
            </Grid>
        </Grid>
        </MuiThemeProvider>
        
    )
}

export default Layout;
