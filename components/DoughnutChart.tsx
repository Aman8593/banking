"use client"
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js";

import React from 'react'
ChartJS.register(ArcElement,Tooltip,Legend)
const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        labels: ['Bank A', 'Bank B', 'Bank C'],
        datasets: [
            {
                label: 'Banks',
                data: [1250,2500,3750], // Assuming `accounts` is an array of data points like [1250, 2500, 3750]
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Customize colors as needed
                hoverOffset: 4,
            },
        ],
    };

  return <Doughnut 
        data={data}
        options = {{
            cutout:'60%',
            plugins:{
                legend:{
                    display:false
                }
            }
        }
        } 
    />
}

export default DoughnutChart