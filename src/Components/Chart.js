import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJs, BarElement, CategoryScale, Legend, LinearScale, Tooltip,Title } from 'chart.js';
ChartJs.register(BarElement, CategoryScale, Legend, LinearScale, Tooltip, Title);

const data =  {
    labels: ['Chennai','Madurai','Vellore','Kadalor'],
    datasets: [
        {
            label: 'Population',
            data: [617849, 173839, 84739, 637330],
            backgroundColor: ['rgba(255,99,132,0.6','rgba(255,99,120,0.6','rgba(255,99,110,0.6','rgba(255,99,150,0.6']
        },
        {
            label: 'New Population',
            data: [6178, 17387, 847399, 63733],
            backgroundColor: ['white']
        }
    ]
}

const options = {
    responsive: true,
    Plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Rockabye Chart'
        }
}
}

export default function Chart() {
        return (
            <div style={{width: 400, height: 200}} className='chart'>
                <Bar data={data} options={options} />
            </div>
        )
}
