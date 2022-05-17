import React, { PureComponent } from 'react';
import classes from './Skills.module.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { skillData } from '../../../DataStore/portfolioData'
// import {
//     BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';

import BarChart from '../../Charts/BarChart/BarChart'


export default class Example extends PureComponent {

    render() {
        return (
            <div>
                <div className={classes.SkillDiv}>
                    <BarChart></BarChart>
                </div>
                <div className={classes.skillRatingdiv}>
                    <h2>Skills Rating:</h2>
                    {skillData.map((skill) => (
                        <div>
                            <Typography component="legend">{skill.name}</Typography>
                            <Rating name="read-only" defaultValue={skill.Skill_Proficiency} max={10} readOnly />
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}