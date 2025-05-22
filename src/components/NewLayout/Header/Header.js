import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core'
import ProfilePicture from '../../../assets/images/newProfilePicNoBG.png';
import { data, greetings } from '../../../DataStore/portfolioData'
import DynamicText from '../Contents/DynamicText/DynamicText';
import ThemeToggle from '../../UI/ThemeToggle'; // Import ThemeToggle


const useStyles = makeStyles(({breakpoints, spacing}) => {
    return createStyles({
        root: {
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            padding: spacing(3),
        },
        profilePic: {
            // minWidth: 100,
            // float: "right",
        },
        imagePaper:{
            width: 380,
            transition: 'width 2s',
            '&:hover':{
                width: 400,
                tranform: 'scale(1.03)',
            }
        },
        infoBox: {
            maxWidth: 700,
            margin: spacing(5),
            padding: spacing(3),
            letterSpacing: 1,
            [breakpoints.up('md')]:{
                marginLeft: spacing(8),
            }
        },
        divider: {
            margin: spacing(3)
        },
        randomText:{
            textAlign: 'center',
            marginBottom: spacing(10)
        }

    })
})
export const Header = () => {
    const classes = useStyles();

    

    return (
        <div>
            <ThemeToggle /> {/* Add ThemeToggle component */}
            <Grid container className={classes.root} flexFlow="column">
                <Grid item>
                    {/* <Paper className= {classes.profilePic}> */}
                        <img src ={ProfilePicture} alt="" className= {classes.imagePaper} />
                    {/* </Paper> */}
                </Grid>
                <Grid item >
                    {/* <img src ={ProfilePicture} alt="" className= {classes.imagePaper} /> */}
                    <div className= {classes.infoBox}>
                        <Typography variant="h3">{data.greeting} {greetings}, My name is {data.userData.nickName}.</Typography>
                        <Typography variant="h6">{data.userData.role}</Typography>
                        <DynamicText dataText = {
                    [
                        'Node.js',
                        'React',
                        'JavaScript',
                        'TypeScript',
                        'AWS Services',
                        'SQL Databases',
                        'System Design'
                    ]
                }/>
                        <Divider className={classes.divider}/>
                        <Typography variant="h6" >{data.userData.about}</Typography>
                    </div>
                </Grid>
            </Grid>
            <div className= {classes.randomText}>
                
            </div>
            
        </div>
    )
}
