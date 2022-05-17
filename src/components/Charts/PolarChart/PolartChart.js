import { Polar } from 'react-chartjs-2';
import Transitions from '../../Animations/PaperTransition';
// import errorHandler from '../../ErrorComp/ErrorComp';
import React, { useEffect } from 'react';
import Utils from '../Utils'


const LineChart = () => {
    const DATA_COUNT = 12;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    // useEffect(() => {
    //     errorHandler();
    // }, [])
    const data = {
        labels: [
            'NodeJS',
            'JavaScript',
            'React',
            'HTML',
            'CSS',
            'Angular',
            'SQL Databases',
            'NoSQL Databases',
            'AWS Cloud',
            'Microservices',
            'Dcoker',
            'Oauth 2.0/OIDC'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [8, 9, 7, 8, 7, 6, 8, 6, 5, 6, 5, 8],
            backgroundColor: [
                'rgb(255, 99, 132, 0.8)',
                'rgb(75, 192, 192, 0.8)',
                'rgb(255, 205, 86, 0.8)',
                'rgb(201, 203, 207, 0.8)',
                'rgb(255, 162, 235, 0.8)',
                'rgb(54, 255, 235, 0.8)',
                'rgb(54, 162, 255, 0.8)',
                'rgb(201, 162, 235, 0.8)',
                'rgb(54, 201, 235, 0.8)',
                'rgb(54, 162, 201, 0.8)',
                'rgb(75, 162, 235, 0.8)',
                'rgb(54, 75, 235, 0.8)',
            ],
            // borderColor: "#3E5151"
        }]
    };


    return (
        <Transitions>
            <Polar data={data} height={650} options={{
                responsive: true,
                maintainAspectRatio: false

            }} />
        </Transitions>
    )
}


export default LineChart;