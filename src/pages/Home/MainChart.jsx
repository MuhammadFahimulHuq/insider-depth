import React from 'react'
import Financial from '../../components/chart/Financial'
import VerticalBar from '../../components/chart/VerticalBar'
import OpenInterest from '../../components/chart/OpenInterest'

const MainChart = () => {
  const generateSampleData = () => {
    const data = []
    let date = new Date(2023, 0, 1)
    // Starting price similar to image ($16,900)
    let price = 16900

    // Create more realistic price movements
    for (let i = 0; i < 60; i++) {
      const open = price
      // More controlled random movements (50-150 range)
      const movement = 50 + Math.random() * 100
      const direction = Math.random() > 0.5 ? 1 : -1

      const close = open + direction * movement
      const high = Math.max(open, close) + Math.random() * 50
      const low = Math.min(open, close) - Math.random() * 50

      // Ensure prices stay within the visible range from the image
      const adjustedClose = Math.max(16200, Math.min(17000, close))
      const adjustedHigh = Math.max(high, adjustedClose)
      const adjustedLow = Math.min(low, adjustedClose)

      data.push({
        x: date.valueOf(),
        o: open,
        h: adjustedHigh,
        l: adjustedLow,
        c: adjustedClose,
      })

      date.setDate(date.getDate() + 1)
      price = adjustedClose
    }

    return data
  }
  const generateSampleData2 = () => {
    const data = []
    let date = new Date(2023, 0, 1)
    // Starting price similar to image ($16,900)
    let price = 16900

    // Create more realistic price movements
    for (let i = 0; i < 120; i++) {
      const open = price
      // More controlled random movements (50-150 range)
      const movement = 50 + Math.random() * 100
      const direction = Math.random() > 0.5 ? 1 : -1

      const close = open + direction * movement
      const high = Math.max(open, close) + Math.random() * 50
      const low = Math.min(open, close) - Math.random() * 50

      // Ensure prices stay within the visible range from the image
      const adjustedClose = Math.max(16200, Math.min(17000, close))
      const adjustedHigh = Math.max(high, adjustedClose)
      const adjustedLow = Math.min(low, adjustedClose)

      data.push({
        x: date.valueOf(),
        o: open,
        h: adjustedHigh,
        l: adjustedLow,
        c: adjustedClose,
      })

      date.setDate(date.getDate() + 1)
      price = adjustedClose
    }

    return data
  }
  return (
    <div className="col-span-2">
      <div className="flex flex-col gap-6">
        <Financial generateSampleData={generateSampleData} />
        <Financial
          generateSampleData={generateSampleData2}
          min={16200}
          max={17000}
          step={200}
          height={200}
        />
        <VerticalBar companyColor={'#EC6D9E'} CompanyName={'Delta Spot'} />
        <VerticalBar companyColor={'#5AA0DA'} CompanyName={'Delta Perps'} />
      </div>
    </div>
  )
}

export default MainChart
