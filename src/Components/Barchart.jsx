import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const Barchart = () => {
  const data = {
    labels: ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65'],
    datasets: [
      {
        label: 'Employer : k 73,500',
        data: [50, 30, 50, 100, 100, 300, 200, 100, 400, 300, 500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Aqua
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Employee: k 52,500',
        data: [40, 100, 300, 200, 100, 300, 200, 100, 200, 300, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Total Interest : K 244,313',
        data: [30, 100, 300, 200, 100, 100, 200, 100, 500, 100, 200],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  }

  const options = {};

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default Barchart;
