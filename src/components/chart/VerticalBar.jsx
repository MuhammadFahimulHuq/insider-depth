import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const VerticalBar = ({ CompanyName, companyColor }) => {
  // Initial data
  const initialData = {
    labels: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    datasets: [
      {
        data: [
          65, 59, -80, 81, 56, -55, 40, 65, 59, -80, 81, 56, -55, 40, 65, 59,
          -80, 81, 56, -55, 40,
        ],
        backgroundColor: '#EC6D9E',
      },
      {
        data: [
          28, 48, -40, 19, -86, 27, 90, 28, 48, -40, 19, -86, 27, 90, 48, -40,
          19, -86, 27, 90,
        ],
        backgroundColor: '#47A4F0',
      },
    ],
  }

  const [chartData] = useState(initialData)

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        offset: false,
      },
      y: {
        position: 'right', // Move Y-axis to the right

        grid: {
          display: true,
          drawOnChartArea: true,
        },
        ticks: {
          font: {
            size: 13,
            weight: 'bold',
            color: '#FFFFFF59',
          },
          callback: function (value) {
            return value
          },
        },
      },
    },
    barPercentage: 0.8,
    categoryPercentage: 0.9,
  }

  return (
    <div className="w-full h-[200px] relative">
      <p
        className="absolute top-1/2 -translate-y-1/2 right-[50px] rounded-sm px-2 py-1 text-sm text-white"
        style={{ backgroundColor: companyColor || 'blue' }}
      >
        {CompanyName || '01'}
      </p>
      <Bar data={chartData} options={options} height={200} width={null} />
    </div>
  )
}

export default VerticalBar
