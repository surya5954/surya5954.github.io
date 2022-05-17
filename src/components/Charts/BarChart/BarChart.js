import { Bar } from 'react-chartjs-2';
import Transitions from '../../Animations/PaperTransition';
// import errorHandler from '../../ErrorComp/ErrorComp';
import React, { useEffect } from 'react';
import Utils from '../Utils';
import {skillChartData} from '../../../DataStore/portfolioData'


const LineChart = () => {

    const options = {
        type: 'bar',
        data: skillChartData,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }


    return (
        <Bar data={skillChartData} config={options} />

    )
}


export default LineChart;