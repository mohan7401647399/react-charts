import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs, BarElement, ArcElement, CategoryScale, Legend, LinearScale, Tooltip,Title } from 'chart.js';
ChartJs.register(BarElement, ArcElement,CategoryScale, Legend, LinearScale, Tooltip, Title);

const data =  {
    labels: ['Completed','Pending','Inprogress'],
    datasets: [
        {
            label: 'Values',
            data: [617849, 173839, 84739],
            backgroundColor: ['black','red','green'],
            borderColor: ['white'],
            borderWidth: 1
        }
    ]
}

export default function PieChart() {
    return (
        <div>
            <Pie data={data} />
        </div>
    )
}
