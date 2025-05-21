import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const OpenInterest = () => {
  // Sample data - replace with your actual data
  const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`)
  const perpData = Array.from(
    { length: 30 },
    () => Math.floor(Math.random() * 10000) + 85000
  )
  const cvdData = Array.from(
    { length: 30 },
    () => Math.floor(Math.random() * 20) + 10
  )
  const spotData = Array.from(
    { length: 30 },
    () => Math.floor(Math.random() * 20) + 5
  )

  const data = {
    labels,
    datasets: [
      {
        label: 'PERP',
        data: perpData,
        borderColor: '#3b82f6', // blue-500
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
        yAxisID: 'y',
      },
      {
        label: 'CVD',
        data: cvdData,
        borderColor: '#10b981', // emerald-500
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        yAxisID: 'y1',
      },
      {
        label: 'SPOT',
        data: spotData,
        borderColor: '#ef4444', // red-500
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        yAxisID: 'y1',
      },
    ],
  }

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12,
          padding: 16,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || ''
            if (label) {
              label += ': '
            }
            if (context.dataset.label === 'PERP') {
              label += context.parsed.y.toLocaleString('en-US', {
                minimumFractionDigits: 2,
              })
            } else {
              label += context.parsed.y
            }
            return label
          },
        },
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'PERP (94,000.00)',
          color: '#3b82f6',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'CVD/SPOT (30B)',
          color: '#6b7280',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Open Interest [?]
        </h2>
        <div className="flex space-x-2">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            PERP
          </span>
          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
            CVD
          </span>
          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
            SPOT
          </span>
        </div>
      </div>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>94000.00</span>
        <span>30B</span>
      </div>
    </div>
  )
}

export default OpenInterest
