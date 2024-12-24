import Sidenav from '../components/Sidenav';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Pie, getElementAtEvent } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register chart components
ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
    Title
);

function Setting({ pieClick }) {
    const chartRef = useRef();

    // Asset data for the pie chart
    const data = {
        labels: ['Building', 'Vehicles', 'Furniture', 'Electronics', 'Others'],
        datasets: [
            {
                label: 'Asset Distribution',
                data: [40, 25, 15, 10, 10], // Example percentages
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)', // Blue
                    'rgba(255, 99, 132, 0.8)', // Red
                    'rgba(255, 206, 86, 0.8)', // Yellow
                    'rgba(75, 192, 192, 0.8)', // Green
                    'rgba(153, 102, 255, 0.8)', // Purple
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Options for the pie chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right', // Place the legend on the right
                labels: {
                    font: {
                        size: 12, // Slightly smaller font size
                    },
                },
            },
            title: {
                display: true,
                text: 'Asset Distribution Overview',
                font: {
                    size: 18, // Slightly smaller title size
                    weight: 'bold',
                },
                color: '#333',
            },
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 10,
                },
                formatter: (value, context) => `${value}%`,
            },
        },
    };

    const onClick = (event) => {
        const { current: chart } = chartRef;
        const clickArr = getElementAtEvent(chart, event);
        if (clickArr.length > 0) {
            pieClick(clickArr[0]);
        }
    };

    return (
        <>
            <Sidenav />
            <div style={{ margin: '20px', textAlign: 'center' }}>
                <div style={{ width: '50%', margin: '0 auto', borderRadius: '10px', padding: '15px',  }}>
                    <Pie 
                        ref={chartRef}
                        options={options}
                        plugins={[ChartDataLabels]}
                        data={data}
                        onClick={onClick}
                    />
                </div>
            </div>
        </>
    );
}

Setting.propTypes = {
    pieClick: PropTypes.func.isRequired,
};

export default Setting;
