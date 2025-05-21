import React, { useEffect, useRef } from 'react'
import {
  Chart,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js'
import 'chartjs-adapter-date-fns'
import {
  CandlestickController,
  CandlestickElement,
} from 'chartjs-chart-financial'

// Register required components
Chart.register(
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  CategoryScale,
  CandlestickController,
  CandlestickElement
)

const FinancialCharts = ({ generateSampleData, min, max, step, height }) => {
  const candlestickRef = useRef(null)
  const candlestickChart = useRef(null)
  const chartContainerRef = useRef(null)

  // Generate sample data matching the price range in the image

  useEffect(() => {
    const financialData = generateSampleData()

    const cleanupCharts = () => {
      if (candlestickChart.current) {
        candlestickChart.current.destroy()
        candlestickChart.current = null
      }
    }

    const resizeChart = () => {
      if (candlestickChart.current) {
        candlestickChart.current.resize()
      }
    }

    if (candlestickRef.current && !candlestickChart.current) {
      candlestickChart.current = new Chart(candlestickRef.current, {
        type: 'candlestick',
        data: {
          datasets: [
            {
              label: 'BTC/USD',
              data: financialData,
              color: {
                up: '#28A79B',
                down: '#EF486A',
                unchanged: '#888888',
              },
              borderColor: (context) => {
                const { o, c } = context.raw
                return c >= o ? '#28A79B' : '#EF486A'
              },
              borderWidth: 1,
              backgroundColor: (context) => {
                const { o, c } = context.raw
                return c >= o ? '#28A79B' : '#EF486A'
              },
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: false,
              font: {
                size: 13,
                weight: 'bold',
              },
            },
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const { o, h, l, c } = context.raw
                  return [
                    `Open: $${o.toLocaleString()}`,
                    `High: $${h.toLocaleString()}`,
                    `Low: $${l.toLocaleString()}`,
                    `Close: $${c.toLocaleString()}`,
                  ]
                },
              },
            },
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                displayFormats: {
                  day: 'MMM d',
                },
              },
              grid: {
                display: false,
              },
            },
            y: {
              min: min || 16400,
              max: max || 17000,
              ticks: {
                callback: function (value) {
                  return value.toLocaleString()
                },
                stepSize: step || 100,
                font: {
                  size: 13,
                  weight: 'bold',
                  color: '#FFFFFF59',
                },
              },
              grid: {
                drawTicks: false,
                display: false,
              },
              position: 'right',
            },
          },
          elements: {
            candlestick: {
              borderColor: (context) => {
                const { o, c } = context.dataset.data[context.dataIndex]
                return c >= o ? '#1E7D73' : '#D43D51'
              },
            },
          },
        },
      })
    }

    // Add resize observer to handle container size changes
    const resizeObserver = new ResizeObserver(resizeChart)
    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current)
    }

    return () => {
      cleanupCharts()
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: '100%',
        position: 'relative',
        padding: 0,
        margin: 0,
      }}
    >
      <h2
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          margin: 0,
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#ffffff',
          zIndex: 10,
        }}
      >
        BTC
      </h2>
      <div
        style={{
          height: height || '500px',
          position: 'relative',
          width: '100%',
          paddingTop: '30px',
          margin: 0,
        }}
      >
        <canvas ref={candlestickRef} />
      </div>
    </div>
  )
}

export default FinancialCharts
